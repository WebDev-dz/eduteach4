/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/generate-entity-classes.ts
const fs = require("fs");
const path = require("path");

const tables = require("../db/schema/tables.js");
function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// المسار إلى مجلد الكيانات
const classesDir = path.resolve(__dirname, '../classes');


if (!fs.existsSync(classesDir)) {
  fs.mkdirSync(classesDir);
}

const entities = Object.keys(tables);

entities.forEach((entity) => {
  const entityPascal = pascalCase(entity);
  const filePath = path.join(classesDir, `${entity}.ts`);

  if (!fs.existsSync(filePath)) {
    const content = `import { Entity } from '@/classes/entity';
import { ${entityPascal} } from '@/types/entities';

export class ${entityPascal}Class extends Entity<${entityPascal}> {
  constructor(data: ${entityPascal}[]) {
    super(data);
  }

  // Add custom methods or overrides for ${entity} here
}
`;
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created: ${filePath}`);
  } else {
    console.log(`⚠️ Skipped (already exists): ${filePath}`);
  }
});
