/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Converts kebab-case or snake_case or camelCase to PascalCase
function toPascalCase(str) {
  return str
    .replace(/[_-]/g, ' ')
    .replace(/(?:^|\s)(\w)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, '');
}

const basePath = path.resolve('components/custom');
const outputFilename = 'data-table.tsx';

const componentTemplate = (entityNamePascal, entityNameOriginal) => `\
"use client";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import type { ${entityNamePascal} } from "@/db/schema";

export default function ${entityNamePascal}DataTable({ data }: { data: ${entityNamePascal}[] }) {
  return <DataTable data={data} columns={columns} />;
}
`;

function generateTables() {
  if (!fs.existsSync(basePath)) {
    console.error("❌ components/custom directory not found.");
    return;
  }

  const entities = fs.readdirSync(basePath).filter((name) => {
    const fullPath = path.join(basePath, name);
    return fs.statSync(fullPath).isDirectory();
  });

  entities.forEach((entityName) => {
    const entityDir = path.join(basePath, entityName);
    const pascalName = toPascalCase(entityName);
    const outputPath = path.join(entityDir, outputFilename);

    const content = componentTemplate(pascalName, entityName);
    fs.writeFileSync(outputPath, content);
    console.log(`✅ Created: ${path.relative(process.cwd(), outputPath)}`);
  });
}

generateTables();
