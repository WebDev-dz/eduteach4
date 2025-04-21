/* eslint-disable @typescript-eslint/no-require-imports */

// validation-generator.js
const fs = require('fs');
const path = require('path');

// Define output file path
const outputFile = path.resolve('validations/insert.ts');
const dfaultValuesoutputFile = path.resolve('lib/consts/defaultValues.ts');


// Ensure directory exists
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const dir1 = path.dirname(dfaultValuesoutputFile);
if (!fs.existsSync(dir1)) {
  fs.mkdirSync(dir1, { recursive: true });
}

// Import the tables from your schema
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require('../db/schema/tables.js');

// Get all table names using the providsed method
const entities = Object.keys(tables);

// Create the content for the insert.ts file
const content = `import { createInsertSchema } from 'drizzle-zod';
import { ${entities.join(', ')} } from '../db/schema';
import { z } from 'zod';

// Function to coerce fields in a Zod schema to appropriate types
export const toCoerce = <T extends z.ZodRawShape>(schema: z.ZodObject<T>) => {
  const shape = schema._def.shape();
  const newShape: z.ZodRawShape = {};
  
  // Process each field in the schema
  for (const [key, field] of Object.entries(shape)) {
    // Check if the field is a ZodDate type and coerce it
    if (field instanceof z.ZodDate) {
      newShape[key] = z.coerce.date();
    }
    
    // Check if the field is a ZodNumber type and coerce it
    else if (field instanceof z.ZodNumber) {
      newShape[key] = z.coerce.number();
    }
    // Keep other types as they are
    else {
      newShape[key] = field;
    }
  }
  
  // Return a new schema with coerced fields
  return z.object(newShape) as z.ZodObject<T>;
};

type InsertSchemaFunction  = typeof createInsertSchema

export const createCoercedInsertSchema: InsertSchemaFunction = (schema) => {
  const zodSchema = createInsertSchema(schema);
  // Coerce fields in the schema to appropriate types
  const coercedSchema = toCoerce(zodSchema);
  return coercedSchema as ReturnType<InsertSchemaFunction> ;
};
${entities.map(table => {
  // Create singular form for schema name - remove trailing 's' if present
  const schemaName = table.endsWith('s') ? table.slice(0, -1) : table;
  return `export const ${schemaName}InsertSchema = createCoercedInsertSchema(${table})`;
}).join('\n')}
`;



const defaultValuesContent = `import { ${entities.join(', ')}InsertSchema } from "./validation/insert"
import { ${entities.join(', ')}InsertSchema } from "./validation/select"


export const defaultValues = {
  ${entities.map(table => {
    // Create singular form for schema name - remove trailing 's' if present
    const schemaName = table.endsWith('s') ? table.slice(0, -1) : table;
    return `${schemaName}: {insert: ${schemaName}InsertSchema._type , select: ${schemaName}InsertSchema._type}`;
  }).join(',\n  ')}
}`








// Write the content to the output file
fs.writeFileSync(outputFile, content);
fs.writeFileSync(dfaultValuesoutputFile, defaultValuesContent);
console.log(`Insert schema validation file generated at ${outputFile}`);