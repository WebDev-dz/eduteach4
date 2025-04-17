// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

// Replace with the path to your schema file
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const componentsDir = path.resolve("components/shared");
const outputFile = path.join(componentsDir, "entity-selector.tsx");

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function pluralize(str) {
  // Basic pluralization; extend for irregular cases if needed
  return str.endsWith("s") ? str : `${str}s`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateSingleSelector(entity) {
  const entityPascal = pascalCase(entity);
  const entityCamel = camelCase(entity);
  const entityPlural = pluralize(entityCamel);

  return `
  ${entityPascal}SelectorField: ({ form, data }) => {
    return (
      <FormField
        control={form.control}
        name="${entityCamel}Id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>${entityPascal}</FormLabel>
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select ${entityCamel}" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data?.${entityPlural}?.map((${entityCamel}) => (
                  <SelectItem key={${entityCamel}.id} value={${entityCamel}.id}>
                    {${entityCamel}.name}
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

function generateMultiSelector(entity) {
  const entityPascal = pascalCase(entity);
  const entityCamel = camelCase(entity);
  const entityPlural = pluralize(entityCamel);

  return `
  ${entityPascal}MultiSelectorField: ({ form, data }) => {
    const [open, setOpen] = useState(false);
    const selected = form.watch("${entityPlural}Ids") || [];

    const toggle = (id: string) => {
      const set = new Set(selected);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      form.setValue("${entityPlural}Ids", Array.from(set));
    };

    return (
      <FormField
        control={form.control}
        name="${entityPlural}Ids"
        render={() => (
          <FormItem>
            <FormLabel>${pluralize(entityPascal)}</FormLabel>
            <FormControl>
              <Button variant="outline" onClick={() => setOpen(true)}>
                {selected.length === 0
                  ? "Select ${entityPlural}"
                  : \`\${selected.length} selected\`}
              </Button>
            </FormControl>
            <FormMessage />

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select ${pluralize(entityPascal)}</DialogTitle>
                </DialogHeader>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {data?.${entityPlural}?.map((${entityCamel}) => {
                    const isChecked = selected.includes(${entityCamel}.id);
                    return (
                      <div key={${entityCamel}.id} className="flex items-center gap-2">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => toggle(${entityCamel}.id)}
                          id={${entityCamel}.id}
                        />
                        <label htmlFor={${entityCamel}.id} className="text-sm">
                          {${entityCamel}.name}
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

function generateSelectorFile() {
  const entities = Object.keys(tables);
  const singleSelectors = entities
    .map((entity) => generateSingleSelector(entity))
    .join("\n");
  const multiSelectors = entities
    .map((entity) => generateMultiSelector(entity))
    .join("\n");

  const fileContent = `// Auto-generated entity selector components
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
import {
  MultiSelectorFields,
  SelectorFields,
  SelectEntities
} from "@/types/ui";

const singleSelectors: SelectorFields<SelectEntities> = {
${singleSelectors}
};

const multiSelectors: MultiSelectorFields<SelectEntities> = {
${multiSelectors}
};

export const {
${entities
  .map(
    (entity) => `
  ${pascalCase(entity)}SelectorField,
  ${pascalCase(entity)}MultiSelectorField,`
  )
  .join("")}
} = { ...singleSelectors, ...multiSelectors };
`;

  ensureDir(componentsDir);
  fs.writeFileSync(outputFile, fileContent);
  console.log(`✅ Created ${outputFile}`);
}

try {
  generateSelectorFile();
} catch (error) {
  console.error("❌ Error generating selector file:", error);
}