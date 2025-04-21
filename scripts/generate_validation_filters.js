/* eslint-disable @typescript-eslint/no-require-imports */
// filter-validation-generator.js
const fs = require('fs');
const path = require('path');

// Define output file path
const outputFile = path.resolve('validations/filters.ts');

// Ensure directory exists
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Import the tables from your schema
const tables = require('../db/schema/tables.js');
const entities = Object.keys(tables);

const importTables = `import { z } from 'zod';
import { ${entities.join(', ')} } from '../db/schema';
import { PgTableWithColumns, TableConfig } from 'drizzle-orm/pg-core';`;

const createFilterFunction = `
/**
 * Creates a filter schema for a given table structure
 * @param tableSchema The DrizzleORM table schema
 */
const createFilterSchema = <T extends TableConfig>(tableSchema: PgTableWithColumns<T>) => {
  const filterObj: Record<string, z.ZodTypeAny> = {};

  for (const [columnName, columnDef] of Object.entries(tableSchema)) {
    const dataType = (columnDef as {dataType: string})?.dataType;

    if (dataType === 'string') {
      filterObj[columnName] = z.object({
        equals: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else if (['number', 'bigint'].includes(dataType)) {
      filterObj[columnName] = z.object({
        equals: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else if (dataType === 'date') {
      filterObj[columnName] = z.object({
        equals: z.coerce.date().optional(),
        before: z.coerce.date().optional(),
        after: z.coerce.date().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else if (dataType === 'boolean') {
      filterObj[columnName] = z.object({
        equals: z.boolean().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else if (dataType === 'uuid') {
      filterObj[columnName] = z.object({
        equals: z.string().uuid().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else if (dataType === 'enum') {
      filterObj[columnName] = z.object({
        equals: z.string().optional(),
        in: z.array(z.string()).optional(),
        isNull: z.boolean().optional(),
      }).optional();
    } else {
      filterObj[columnName] = z.object({
        equals: z.any().optional(),
        isNull: z.boolean().optional(),
      }).optional();
    }
  }

  const baseSchema: () => z.ZodTypeAny = () => z.object({
    AND: z.array(z.lazy(baseSchema)).optional(),
    OR: z.array(z.lazy(baseSchema)).optional(),
    NOT: z.lazy(baseSchema).optional(),
    ...filterObj,
  }).strict();

  return baseSchema();
};
`;

const schemaDefinitions = entities.map(table => {
  const singular = table.endsWith('s') ? table.slice(0, -1) : table;
  return `export const ${singular}FilterSchema = createFilterSchema(${table});
export type ${singular}Filter = z.infer<typeof ${singular}FilterSchema>;`;
}).join('\n\n');

const combinedEntityFilters = `export type EntityFilters = {
  ${entities.map(table => {
    const singular = table.endsWith('s') ? table.slice(0, -1) : table;
    return `${table}: ${singular}Filter`;
  }).join(',\n  ')}
};`;

const fileContent = `${importTables}

${createFilterFunction}

${schemaDefinitions}

${combinedEntityFilters}
`;

fs.writeFileSync(outputFile, fileContent);
console.log(`✅ Filter schema validation file generated at: ${outputFile}`);
