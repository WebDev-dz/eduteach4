// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const typesDir = path.resolve("types");
const entitiesFile = path.join(typesDir, "entities.d.ts");
const serverFile = path.join(typesDir, "server.d.ts");
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

// Generate
ensureDir(typesDir);
writeFile(entitiesFile, generateEntitiesTypes());
writeFile(serverFile, generateServerTypes());
writeFile(servicesFile, "// Add service-related types here\n");
