/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const schema = require("../db/schema/tables"); // عدّل المسار حسب هيكل مشروعك

const outputPath = path.resolve("validations/search-params.js");

function generateZodField(field, fieldName) {
  const wrap = (s) => `${s}.optional()`;

  if (field.enumValues) {
    return wrap(`z.enum(${JSON.stringify(field.enumValues)} /* as const */)`);
  }

  if (fieldName === "id" || fieldName.endsWith("Id")) {
    return wrap("z.string().uuid()");
  }

  if (field.dataType === "boolean") {
    return wrap('z.enum(["true", "false"]).transform(val => val === "true")');
  }

  if (field.dataType === "number") {
    return wrap("z.coerce.number()");
  }

  if (field.dataType === "string") {
    if (fieldName.toLowerCase().includes("email")) {
      return wrap("z.string().email()");
    }
    return wrap("z.string()");
  }

  return wrap("z.any()");
}

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function generateSearchParams() {
  const lines = [
    `import { z } from "zod";`,
    `import * as enums from "@/lib/db/schema";`,
    "",
  ];

  const entries = Object.entries(schema);
  console.log({entries})
  if (!entries.length) {
    console.error("❌ Schema is empty or not loaded correctly");
    return;
  }

  for (const [key, table] of entries) {
    // if (!table.columns) continue;

    const entityName = camelCase(key);
    const schemaName = `${entityName}SearchParamsSchema`;

    lines.push(`// ${pascalCase(entityName)} Search Params Schema`);
    lines.push(`export const ${schemaName} = z.object({`);
    console.log(table.columns)
    for (const [columnName, column] of Object.entries(table.columns)) {
      lines.push(`  ${columnName}: ${generateZodField(column, columnName)},`);
    }

    lines.push(`  page: z.coerce.number().optional().default(1),`);
    lines.push(`  limit: z.coerce.number().optional().default(10),`);
    lines.push(`  sort: z.string().optional(),`);
    lines.push(`  order: z.enum(["asc", "desc"]).optional().default("asc"),`);
    lines.push(`});\n`);
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, lines.join("\n"));

  console.log(`✅ Generated search-params.js with ${entries.length} schemas`);
}

generateSearchParams();
