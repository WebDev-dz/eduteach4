// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const typesDir = path.resolve("types");
const entitiesFile = path.join(typesDir, "entities.d.ts");
const serverFile = path.join(typesDir, "server.d.ts");
const uiFile = path.join(typesDir, "ui.d.ts");
const servicesFile = path.join(typesDir, "services.d.ts");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created ${filePath}`);
}

function generateEntitiesTypes() {
  let importLine = `import { `;
  let typeLines = "";

  const entityNames = Object.keys(tables);
  importLine += entityNames.join(", ") + ` } from "@/db/schema";\n\n`;

  entityNames.forEach((entity) => {
    const pascal = entity[0].toUpperCase() + entity.slice(1);
    typeLines += `export type ${pascal} = typeof ${entity}.$inferSelect;\n`;
    typeLines += `export type ${pascal}CreateInput = typeof ${entity}.$inferInsert;\n`;
    typeLines += `export type ${pascal}UpdateInput = typeof ${entity}.$inferSelect;\n\n`;
  });

  return importLine + typeLines.trim();
}

function generateServerTypes() {
  return `import { db } from "@/lib/db";

export type ServerGetter = {
  [K in keyof typeof db.query]: Partial<
    Pick<(typeof db.query)[K], "findMany" | "findFirst" | "findUnique" | "create" | "update" | "delete">
  >;
};

type Promisable<T> = T extends Promise<infer U> ? U : never;

type OverriddenHandler<
  T extends (...args: any[]) => any
> = (values: any) => Promise<Promisable<ReturnType<T>>>;

export type Server = {
  [K in keyof ServerGetter]: ServerGetter[K] & {
    create?: OverriddenHandler<NonNullable<ServerGetter[K]["findMany"]>>;
    update?: OverriddenHandler<NonNullable<ServerGetter[K]["findMany"]>>;
    delete?: OverriddenHandler<NonNullable<ServerGetter[K]["findMany"]>>;
  };
};
`;
}
function generateUITypes() {
  // Get all table names from the schema
  const schemaEntities = Object.keys(tables);

  // Dynamically detect enum types from the schema
  // Assuming enums are exported alongside tables in the schema file
  // and follow a naming convention like ending with 'Enum'
  const enumTypes = Object.keys(tables)
    .filter((key) => key.endsWith("Enum"))
    .map((name) => ({
      name,
      type: name
        .replace("Enum", "")
        .replace(/([a-z])([A-Z])/g, "$1$2")
        .split(/(?=[A-Z])/)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(""),
    }));

  // Dynamically map select entities
  // Assuming select entities are derived from schema entities with specific mappings
  const selectEntities = schemaEntities
    .filter((entity) => entity !== "personalEvents") // Exclude specific tables if needed
    .map((entity) => {
      const pascalName = entity[0].toUpperCase() + entity.slice(1);
      // Special case for Teacher mapping to User
      if (entity === "users") {
        return { name: "Teacher", type: "User" };
      }
      return { name: pascalName, type: pascalName };
    })
    .concat(
      schemaEntities.includes("personalEvents")
        ? [{ name: "CalendarEvent", type: "CalendarEvent" }]
        : []
    );

  let content = `import { UseFormReturn } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { ${schemaEntities.join(", ")} } from "@/db/schema";
${enumTypes.length > 0 ? `import { ${enumTypes.map(e => e.name).join(", ")} } from "@/db/schema";` : ""}

// Schema definition
const schema = {
  ${schemaEntities.join(",\n  ")},
};

type Schema = typeof schema;
type WritableSchemaData = {
  [Key in keyof Schema]?: Array<
    Schema[Key] extends { $inferSelect: infer U } ? U : never
  >;
};

// Form Fields
export type FormFields<T extends FieldValues> = {
  [K in keyof T as K extends string
    ? \`\${Capitalize<K>}Field\`
    : never]: (props: {
    form: UseFormReturn<T>;
    data?: WritableSchemaData;
  }) => React.ReactNode;
};

// Selectors
${enumTypes
  .map(
    (e) => `const ${e.name.replace("Enum", "")} = ${e.name}.enumValues;`
  )
  .join("\n")}

${enumTypes.length > 0 ? `export type SelectEnums = {
${enumTypes
  .map((e) => `  ${e.type}: typeof ${e.name.replace("Enum", "")};`)
  .join("\n")}
};` : ""}

export type SelectorField<T extends FieldValues> = (props: {
  form: UseFormReturn<T>;
  data?: WritableSchemaData;
}) => React.ReactNode;

export type MultiSelectorField<T extends FieldValues> = (props: {
  form: UseFormReturn<T>;
  data?: WritableSchemaData;
}) => React.ReactNode;

// Select Entities
export type SelectEntities = {
${selectEntities
  .map((e) => `  ${e.name}: ${e.type};`)
  .join("\n")}
};

export type SelectorFields<T extends FieldValues> = {
  [K in keyof T as K extends string
    ? \`\${Capitalize<K>}SelectorField\`
    : never]: (props: {
    form: UseFormReturn<T>;
    data?: T[K];
  }) => React.ReactNode;
};

export type MultiSelectorFields<T extends FieldValues> = {
  [K in keyof T as K extends string
    ? \`\${Capitalize<K>}MultiSelectorField\`
    : never]: (props: {
    form: UseFormReturn<T>;
    data?: WritableSchemaData;
  }) => React.ReactNode;
};
`;

  return content.trim();
}

// Generate
ensureDir(typesDir);
writeFile(entitiesFile, generateEntitiesTypes());
writeFile(serverFile, generateServerTypes());
writeFile(uiFile, generateUITypes());
writeFile(servicesFile, "// Add service-related types here\n");
