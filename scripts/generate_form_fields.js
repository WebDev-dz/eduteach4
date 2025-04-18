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
  text: { component: "StringInput", props: { } },
  varchar: { component: "StringInput", props: {} },
  integer: { component: "NumberInput", props: { min: "0" } },
  bigint: { component: "NumberInput", props: { min: "0" } },
  float: { component: "NumberInput", props: { step: "0.01" } },
  boolean: { component: "CheckboxInput", props: {} },
  timestamp: { component: "DateInput", props: {} },
  date: { component: "DateInput", props: {} },
  json: { component: "TextInput", props: { rows: 3 } },
};

// Global special fields (apply to all entities)
const globalSpecialFields = {
  description: { component: "TextInput", props: { rows: 3 } },
  name: { component: "StringInput", props: {} },
  isActive: { component: "CheckboxInput", props: {} },
  email: { component: "StringInput", props: { } },
};

// Common field patterns
const specialFieldPatterns = {
  // Fields ending with these suffixes get special treatment
  endsWith: {
    'email': { component: "StringInput", props: {  } },
    'description': { component: "TextInput", props: { rows: 3 } },
    'notes': { component: "TextInput", props: { rows: 3 } },
    'content': { component: "TextInput", props: { rows: 5 } },
    'date': { component: "DateInput", props: {} },
  },
  // Fields containing these strings get special treatment
  contains: {
    'password': { component: "StringInput", props: {} },
    'phone': { component: "StringInput", props: { } },
    'url': { component: "StringInput", props: { } },
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
      component: "SelectInput",
      props: {},
      options: column.enumValues
    };
  }

  // Check if it's a known enum field
  const normalizedName = columnName.toLowerCase();
  for (const [enumName, options] of Object.entries(knownEnumOptions)) {
    if (normalizedName === enumName || normalizedName === `${enumName.toLowerCase()}id`) {
      return {
        component: "SelectInput",
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
    `import React from "react";` ,
    `import { BaseInputProps, StringInput, SelectInput, NumberInput, TextInput, CheckboxInput, DateInput } from "../form-inputs";`,
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
     if (fieldConfig.component === "StringInput") {
        fieldContent = `
          <StringInput 
            form={form} 
            name="${columnName}" 
            label="${columnName[0].toUpperCase() + columnName.slice(1)}"
            placeholder="Enter ${columnName}"
            ${Object.entries(fieldConfig.props)
              .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
              .join(" ")}
            />
        `;
      } else if (fieldConfig.component === "TextInput") {
        fieldContent = `
        <TextInput 
            form={form} 
            name="${columnName}" 
            label="${columnName[0].toUpperCase() + columnName.slice(1)}"
            placeholder="Enter ${columnName}"
            ${Object.entries(fieldConfig.props)
              .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
              .join(" ")}
          />
        `;
      } else if (fieldConfig.component === "CheckboxInput") {
        fieldContent = `
          <CheckboxInput 
            form={form} 
            name="${columnName}" 
            label="${columnName[0].toUpperCase() + columnName.slice(1)}"
          />
        `;
      } else if (fieldConfig.component === "SelectInput") {
        const selectItems = (fieldConfig.options || []).map((value) => {
          // Format display value dynamically
          const displayValue = formatDisplayValue(value, columnName);
          return `{ value: "${value}", label: "${displayValue}" }`;
        });
        fieldContent = `
         <SelectInput
            form={form}
            name="${columnName}"
            label="${columnName[0].toUpperCase() + columnName.slice(1)}"
            options={[${selectItems.join(", ")}]}
            placeholder="Select ${columnName}"
          />
        `;
      } else if (fieldConfig.component === "NumberInput") {
        fieldContent = `
          <NumberInput 
            form={form} 
            name="${columnName}" 
            label="${columnName[0].toUpperCase() + columnName.slice(1)}"
            placeholder="Enter ${columnName}"
            ${Object.entries(fieldConfig.props)
              .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
              .join(" ")}
          />
        `;
      } else if (fieldConfig.component === "DateInput") {
        fieldContent = `
        <DateInput 
          form={form} 
          name="${columnName}" 
          label="${columnName[0].toUpperCase() + columnName.slice(1)}"
        />
      `;
      }

      return `
        const ${fieldName} = ({ form, data, ...props }: ClassFieldProps) => {
        return (
            ${fieldContent.trim()}
        );
        };
        ${fieldName}.displayName = "${entityName}Form.${fieldName}";
        ${entityName}Form.${fieldName} = ${fieldName};
    `;
    })
    .join("\n");

  // Add component imports based on usage
 if (componentsUsed.has("StringInput") || componentsUsed.has("TextInput") || componentsUsed.has("NumberInput") || componentsUsed.has("SelectInput") || componentsUsed.has("CheckboxInput") || componentsUsed.has("DateInput")) {
    imports.add(`
interface ${entityName}FieldProps extends BaseInputProps {
  data?: {[key in keyof EntityFormData]?: EntityFormData[key]};
}`);
  }
  // Generate the file content
  const content = `
${Array.from(imports).join("\n")}
type EntityFormData = typeof defaultValues.${entityName}.insert;

const ${entityName}Form = () => {
  return;
};

${fieldComponents}

export default ${entityName}Form;
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
