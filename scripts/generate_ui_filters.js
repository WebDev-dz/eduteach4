/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const tables = require('../db/schema/tables.js');
const entities = Object.keys(tables);

const baseDir = path.resolve('components/custom');

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
  

const toPascalCase = (str) =>
  str
    .replace(/_./g, s => s[1].toUpperCase())
    .replace(/^\w/, c => c.toUpperCase());

const generateFilterComponent = (entityName, columns) => {
  const Entity = toPascalCase(entityName.endsWith('s') ? entityName.slice(0, -1) : entityName);
  const FormComponentImport = `import  ${Entity}Form  from './form-fields';`;

  const fields = Object.keys(columns)
    .map(column => `        <${Entity}Form.${formatDisplayValue(column, column)}Field  form={form} />`)
    .join('\r\n');

  return `import { useForm } from 'react-hook-form';
import { ${entityName.slice(0, -1)}FilterSchema } from '@/validations/filters';
import { zodResolver } from '@hookform/resolvers/zod';
${FormComponentImport}

export const ${Entity}Filter = () => {
  const form = useForm({
    resolver: zodResolver(${entityName}FilterSchema),
    defaultValues: {},
  });

  return (
    <form className="grid gap-4">
${fields}
    </form>
  );
};
`;
};

entities.forEach(entity => {
  const entityDir = path.join(baseDir, entity);
  const filePath = path.join(entityDir, 'filter.tsx');

  if (!fs.existsSync(entityDir)) {
    fs.mkdirSync(entityDir, { recursive: true });
  }

  const filterComponent = generateFilterComponent(entity, tables[entity]);

  fs.writeFileSync(filePath, filterComponent);
  console.log(`✅ Generated: ${filePath}`);
});
