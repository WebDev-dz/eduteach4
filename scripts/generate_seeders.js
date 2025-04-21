/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/generate_seed.js
const fs = require("fs");
const path = require("path");
const  tables  = require("../db/schema/tables");

const getMockValues = (column) => {
  const type = column.dataType;

  if (column.enumValues && column.enumValues.length) {
    return {
      values: column.enumValues.map((val) => `"${val}"`),
      isUnique: false,
    };
  }



  if (column.name == "id" || column.name.endsWith("Id")) {
    return { values: ['"11111111-1111-1111-1111-111111111111"', '"22222222-2222-2222-2222-222222222222"'], isUnique: false };
  }

  if (type === "number" || type === "int" || type === "bigint" || type === "float") {
    return { values: [1, 2, 3, 4, 5], isUnique: false };
  }

  if (type === "date" || type === "datetime" || type === "timestamp") {
    return { values: ['"2023-01-01"', '"2023-06-01"', '"2024-01-01"'], isUnique: false };
  }

  // default: treat as string
  return { values: ['"Sample A"', '"Sample B"', '"Sample C"'], isUnique: false };
};

const generateColumnSeeds = (columns) => {
  return Object.entries(columns)
    .map(([colName, column]) => {
      const { values, isUnique } = getMockValues(column);
      return `${colName}: funcs.valuesFromArray({ values: [${values.join(", ")}], isUnique: ${isUnique} })`;
    })
    .join(",\n      ");
};

const generateEntitySeed = (entity, table) => {
  return `${entity}: {
    columns: {
      ${generateColumnSeeds(table)}
    },
  },`;
};

const generateSeedFile = () => {
  let imports = `import { seed } from "drizzle-seed";\n`;
  imports += `import { db } from "@/db/db";\n`;
  imports += `import { schema } from "@/db/schema";\n\n`;

  let refineContent = "";

  for (const [entity, table] of Object.entries(tables)) {
    refineContent += generateEntitySeed(entity, table) + "\n";
  }

  const fileContent = `${imports}await seed(db, schema, { count: 1000 }).refine((funcs) => ({
  ${refineContent}}));
`;

  fs.writeFileSync(path.resolve(__dirname, "../db/seed.ts"), fileContent);
  console.log("✅ seed.ts file generated successfully.");
};

generateSeedFile();
