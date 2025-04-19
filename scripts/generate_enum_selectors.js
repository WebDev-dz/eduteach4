// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

// Replace with the path to your schema file
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/enums");

const componentsDir = path.resolve("components/shared");
const outputFile = path.join(componentsDir, "enum-selectors.tsx");

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function formatEnumName(name) {
  // Convert names like userRoleEnum to UserRole
  return pascalCase(name.replace(/Enum$/, ''));
}

// Format display name for enum values (e.g., convert "user_role" to "User Role")
function formatDisplayValue(value) {
  if (typeof value !== 'string') return String(value);
  
  if (value.includes('_')) {
    return value
      .split('_')
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(' ');
  }
  
  return value[0].toUpperCase() + value.slice(1);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateEnumSelector(enumName, enumValues) {
  const formattedName = formatEnumName(enumName);
  const fieldName = camelCase(formattedName);
  
  return `
  ${formattedName}SelectorField: ({ form, label = "${formattedName}" }) => {
    return (
      <FormField
        control={form.control}
        name="${fieldName}"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select ${fieldName}" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {${enumName}.enumValues.map((value) => (
                  <SelectItem key={value} value={value}>
                    {formatDisplayValue(value)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  },`;
}

function generateMultiEnumSelector(enumName, enumValues) {
  const formattedName = formatEnumName(enumName);
  const fieldName = camelCase(formattedName);
  
  return `
  ${formattedName}MultiSelectorField: ({ form, label = "${formattedName}s" }) => {
    const [open, setOpen] = useState(false);
    const selected = form.watch("${fieldName}s") || [];

    const toggle = (value: string) => {
      const set = new Set(selected);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      form.setValue("${fieldName}s", Array.from(set));
    };

    return (
      <FormField
        control={form.control}
        name="${fieldName}s"
        render={() => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Button variant="outline" onClick={() => setOpen(true)}>
                {selected.length === 0
                  ? "Select ${fieldName}s"
                  : \`\${selected.length} selected\`}
              </Button>
            </FormControl>
            <FormMessage />

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select ${formattedName}s</DialogTitle>
                </DialogHeader>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {${enumName}.enumValues.map((value) => {
                    const isChecked = selected.includes(value);
                    return (
                      <div key={value} className="flex items-center gap-2">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => toggle(value)}
                          id={value}
                        />
                        <label htmlFor={value} className="text-sm">
                          {formatDisplayValue(value)}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <DialogFooter>
                  <Button onClick={() => setOpen(false)}>Done</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </FormItem>
        )}
      />
    );
  },`;
}

function generateEnumSelectorFile() {
  // Find all enum tables (those ending with Enum)
  const enumEntities = Object.entries(tables)
    .filter(([name]) => name.endsWith('Enum'))
    .map(([name, table]) => ({
      name,
      values: table.enumValues || []
    }));

  if (enumEntities.length === 0) {
    console.log("⚠️ No enum entities found in the schema");
    return;
  }

  const singleSelectors = enumEntities
    .map((entity) => generateEnumSelector(entity.name, entity.values))
    .join("\n");
    
  const multiSelectors = enumEntities
    .map((entity) => generateMultiEnumSelector(entity.name, entity.values))
    .join("\n");

  const enumImports = enumEntities
    .map((entity) => entity.name)
    .join(', ');

  const fileContent = `// Auto-generated enum selector components
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";

import { useState } from "react";
import { ${enumImports} } from "@/db/schema/tables";
import { EnumSelectorFields, EnumMultiSelectorFields } from "@/types/ui";

// Helper function to format display values
function formatDisplayValue(value: string): string {
  if (value.includes('_')) {
    return value
      .split('_')
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(' ');
  }
  
  return value[0].toUpperCase() + value.slice(1);
}

export interface EnumSelectorProps {
  form: any;
  label?: string;
}

const enumSelectors: EnumSelectorFields = {
${singleSelectors}
};

const multiEnumSelectors: EnumMultiSelectorFields = {
${multiSelectors}
};

export const {
${enumEntities
  .map(
    (entity) => {
      const formattedName = formatEnumName(entity.name);
      return `  ${formattedName}SelectorField,
  ${formattedName}MultiSelectorField,`;
    }
  )
  .join("\n")}
} = { ...enumSelectors, ...multiEnumSelectors };
`;

  ensureDir(componentsDir);
  fs.writeFileSync(outputFile, fileContent);
  console.log(`✅ Created ${outputFile}`);
}

try {
  generateEnumSelectorFile();
} catch (error) {
  console.error("❌ Error generating enum selector file:", error);
  console.error(error.stack);
}