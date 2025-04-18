// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");
const { TableAliasProxyHandler } = require("drizzle-orm");

const componentsBaseDir = path.resolve("components", "custom");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created ${filePath}`);
}

// Generic function to format display values
function formatDisplayValue(value, columnName) {
  if (typeof value !== 'string') return value;
  
  if (value.includes('_')) {
    return value
      .split('_')
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(' ');
  }
  
  if (columnName === 'gradeLevel') {
    return `Grade ${value}`;
  }
  
  return value[0].toUpperCase() + value.slice(1);
}

// Map database column types to UI components
const fieldTypeMap = {
  text: { component: "Input", props: { type: "text" } },
  varchar: { component: "Input", props: { type: "text" } },
  integer: { component: "Input", props: { type: "number", min: "0" } },
  bigint: { component: "Input", props: { type: "number", min: "0" } },
  float: { component: "Input", props: { type: "number", step: "0.01" } },
  boolean: { component: "Checkbox", props: {} },
  timestamp: { component: "Input", props: { type: "datetime-local" } },
  date: { component: "Input", props: { type: "date" } },
  json: { component: "Textarea", props: { rows: 3 } },
};

// Global special fields (apply to all entities)
const globalSpecialFields = {
  description: { component: "Textarea", props: { rows: 3 } },
  name: { component: "Input", props: { type: "text" } },
  isActive: { component: "Checkbox", props: {} },
  email: { component: "Input", props: { type: "email" } },
};

// Common field patterns
const specialFieldPatterns = {
  // Fields ending with these suffixes get special treatment
  endsWith: {
    'email': { component: "Input", props: { type: "email" } },
    'description': { component: "Textarea", props: { rows: 3 } },
    'notes': { component: "Textarea", props: { rows: 3 } },
    'content': { component: "Textarea", props: { rows: 5 } },
    'date': { component: "Input", props: { type: "date" } },
  },
  // Fields containing these strings get special treatment
  contains: {
    'password': { component: "Input", props: { type: "password" } },
    'phone': { component: "Input", props: { type: "tel" } },
    'url': { component: "Input", props: { type: "url" } },
  }
};

// Dictionary of known enums and their options
const knownEnumOptions = {
  'subject': [
    "mathematics",
    "science",
    "english",
    "history",
    "geography",
    "art",
    "music",
    "physical_education",
  ],
  'gradeLevel': Array.from({ length: 12 }, (_, i) => String(i + 1)),
  'academicYear': ["2024-2025", "2025-2026", "2026-2027"],
  'role': tables.userRoleEnum?.enumValues || ["teacher", "student", "admin"],
  'status': ["active", "inactive", "pending", "archived"],
  'priority': ["low", "medium", "high", "urgent"],
  'gender': ["male", "female", "other", "prefer_not_to_say"],
};

function getFieldComponent(columnName, column, entityName) {
  // First check for enum values in the column
  if (column.enumValues) {
    return { 
      component: "Select", 
      props: {}, 
      options: column.enumValues 
    };
  }
  
  // Check if it's a known enum field
  const normalizedName = columnName.toLowerCase();
  for (const [enumName, options] of Object.entries(knownEnumOptions)) {
    if (normalizedName === enumName || normalizedName === `${enumName.toLowerCase()}id`) {
      return { 
        component: "Select", 
        props: {}, 
        options: options 
      };
    }
  }
  
  // Check global special fields
  if (globalSpecialFields[columnName]) {
    return globalSpecialFields[columnName];
  }
  
  // Check for pattern matching fields
  for (const [suffix, config] of Object.entries(specialFieldPatterns.endsWith)) {
    if (normalizedName.endsWith(suffix.toLowerCase())) {
      return config;
    }
  }
  
  for (const [pattern, config] of Object.entries(specialFieldPatterns.contains)) {
    if (normalizedName.includes(pattern.toLowerCase())) {
      return config;
    }
  }
  
  // Map based on column type
  return fieldTypeMap[column.dataType] || fieldTypeMap.text; // Default to text input
}

function generateFormFields(entityName, columns) {
  const entityDir = path.join(componentsBaseDir, entityName);
  const formFieldsFile = path.join(entityDir, "form-fields.tsx");

  // Identify foreign keys (assuming they end with 'Id')
  const foreignKeys = Object.keys(columns).filter((col) =>
    col.toLowerCase().endsWith("id")
  );

  // Filter out foreign keys for FormFields
  const formFieldKeys = Object.keys(columns).filter(
    (col) => !foreignKeys.includes(col)
  );

  // Track required imports
  const imports = new Set([
    `import { FormFields } from "@/types/ui";`,
    `import { defaultValues } from "@/lib/consts";`,
    `import { FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui";`,
  ]);

  // Track used components
  const componentsUsed = new Set();

  // Generate field components
  const fieldComponents = formFieldKeys
    .map((columnName) => {
      const column = columns[columnName];
      const fieldName =
        columnName[0].toUpperCase() + columnName.slice(1) + "Field";
      
      // Get appropriate field configuration
      const fieldConfig = getFieldComponent(columnName, column, entityName);
      
      componentsUsed.add(fieldConfig.component);

      // Generate field component
      let fieldContent = "";
      if (fieldConfig.component === "Input") {
        fieldContent = `
          <FormField
            control={form.control}
            name="${columnName}"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="${columnName}">${
          columnName[0].toUpperCase() + columnName.slice(1)
        }</FormLabel>
                <FormControl>
                  <Input
                    id="${columnName}"
                    ${Object.entries(fieldConfig.props)
                      .map(([key, value]) => `${key}="${value}"`)
                      .join(" ")}
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter ${columnName}"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        `;
      } else if (fieldConfig.component === "Textarea") {
        fieldContent = `
          <FormField
            control={form.control}
            name="${columnName}"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="${columnName}">${
          columnName[0].toUpperCase() + columnName.slice(1)
        }</FormLabel>
                <FormControl>
                  <Textarea
                    id="${columnName}"
                    ${Object.entries(fieldConfig.props)
                      .map(([key, value]) => `${key}="${value}"`)
                      .join(" ")}
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter ${columnName}"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        `;
      } else if (fieldConfig.component === "Checkbox") {
        fieldContent = `
          <FormField
            control={form.control}
            name="${columnName}"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="${columnName}"
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="${columnName}">${
          columnName[0].toUpperCase() + columnName.slice(1)
        }</FormLabel>
                </div>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        `;
      } else if (fieldConfig.component === "Select") {
        const selectItems = (fieldConfig.options || []).map((value) => {
          // Format display value dynamically
          const displayValue = formatDisplayValue(value, columnName);
          return `
            <SelectItem value="${value}">${displayValue}</SelectItem>`;
        });

        fieldContent = `
          <FormField
            control={form.control}
            name="${columnName}"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="${columnName}">${
          columnName[0].toUpperCase() + columnName.slice(1)
        }</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="${columnName}">
                      <SelectValue placeholder="Select ${columnName}" />
                    </SelectTrigger>
                    <SelectContent>
                      ${selectItems.join("\n                      ")}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        `;
      }

      return `
    ${fieldName}: ({ form, data }): React.ReactNode => {
      return (${fieldContent.trim()});
    },`;
    })
    .join("\n");

  // Add component imports based on usage
  if (componentsUsed.has("Input")) {
    imports.add(`import { Input } from "@/components/ui/input";`);
  }
  if (componentsUsed.has("Textarea")) {
    imports.add(`import { Textarea } from "@/components/ui/textarea";`);
  }
  if (componentsUsed.has("Checkbox")) {
    imports.add(`import { Checkbox } from "@/components/ui/checkbox";`);
  }
  if (componentsUsed.has("Select")) {
    imports.add(`
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";`);
  }

  // Generate the file content
  const content = `
${Array.from(imports).join("\n")}

type EntityFormData = typeof defaultValues.${entityName}.insert;

const ${entityName}Fields: ${
    foreignKeys.length > 0
      ? `Omit<FormFields<EntityFormData>, "${foreignKeys
          .map((fk) => fk[0].toUpperCase() + fk.slice(1) + "Field")
          .join(' | ')}">`
      : "FormFields<EntityFormData>"
  } = {
${fieldComponents}
};

// Export all individual fields for direct imports
export const {
${formFieldKeys
  .map((col) => `  ${col[0].toUpperCase() + col.slice(1)}Field`)
  .join(",\n")},
} = ${entityName}Fields;
`;

  // Write the file
  ensureDir(entityDir);
  writeFile(formFieldsFile, content.trim());
}

// Generate form fields for all entities
Object.entries(tables).forEach(([entityName, table]) => {
  // Skip enums or non-table entities
  if (entityName.endsWith("Enum")) return;

  // Get columns from the schema
//   const columns = tab || {};
  
//   console.log(table._.)
  // Skip if no columns and no schema (avoid defaulting to mockColumns)
  if (Object.keys(table).length === 0) {
    console.log(`⚠️ Skipping ${entityName}: No columns defined`);
    return;
  }

  generateFormFields(entityName, table);
});