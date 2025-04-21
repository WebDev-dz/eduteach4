/* eslint-disable @typescript-eslint/no-require-imports */
// validation-generator.js
const fs = require('fs');
const path = require('path');

// Define output file path
const outputFile = path.resolve('validations/select.ts');

// Ensure directory exists
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Import the tables from your schema
const tables = require('../db/schema/tables.js');

// Get all table names using the providsed method
const entities = Object.keys(tables);

// Create the content for the select.ts file
const content = `import { createSelectSchema } from 'drizzle-zod';
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

type SelectSchemaFunction  = typeof createSelectSchema

export const createCoercedSelectSchema: SelectSchemaFunction = (schema) => {
  const zodSchema = createSelectSchema(schema);
  // Coerce fields in the schema to appropriate types
  const coercedSchema = toCoerce(zodSchema);
  return coercedSchema as ReturnType<SelectSchemaFunction> ;
};


${entities.map(table => {
  // Create singular form for schema name - remove trailing 's' if present
  const schemaName = table.endsWith('s') ? table.slice(0, -1) : table;
  return `export const ${schemaName}SelectSchema = createCoercedSelectSchema(${table})`;
}).join('\n')}
`;

// Write the content to the output file
fs.writeFileSync(outputFile, content);
console.log(`Select schema validation file generated at ${outputFile}`);