/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/generate-server-service.js
const fs = require("fs");
const path = require("path");

// List of entities to ignore (if any)
const IGNORE = [];

const TABLES_PATH = path.resolve(__dirname, "../db/schema/tables.js");
const OUTPUT_PATH = path.resolve(__dirname, "../lib/server.ts");

const getEntityList = () => {
  const schema = require(TABLES_PATH);
  return Object.keys(schema).filter(key => !IGNORE.includes(key));
};

const generateHandlerHelpers = () => `
import { Server } from "@/types/server";
import { db } from "@/db";
import * as schema from "@/db/schema/tables";
import {
  ${getEntityList().map(entity => `${entity.slice(0, -1)}InsertSchema`).join(",\n  ")}
} from "@/validations/insert";
import { ZodSchema } from "zod";
import { PgTable, TableConfig } from "drizzle-orm/pg-core";

const checkInsert = (values: any, schema: ZodSchema) => {
  const singleResult = schema.safeParse(values);
  if (singleResult.success) return singleResult.data;

  const arrayResult = schema.array().safeParse(values);
  if (arrayResult.success) return arrayResult.data;

  const firstError =
    (singleResult.success === false && singleResult.error.errors[0]?.message) ||
    (arrayResult.success === false && arrayResult.error.errors[0]?.message) ||
    "Validation failed";

  throw new Error(firstError);
};

const createHandler = <T extends PgTable<TableConfig>>(table: T, schema: ZodSchema) => (values: any) =>
  db.insert(table).values(checkInsert(values, schema)).returning();

const updateHandler = <T extends PgTable<TableConfig>>(table: T, schema: ZodSchema) => (values: any) =>
  db.update(table).set(checkInsert(values, schema)).returning();

const deleteHandler = <T extends PgTable<TableConfig>>(table: T) => (config: any) =>
  db.delete(table).where(config).returning();
`;

const generateEntityBlock = (entity) => {
  return `
  ${entity}: {
    findMany: (config) => db.query.${entity}.findMany(config),
    findFirst: (config) => db.query.${entity}.findFirst(config),
    findUnique: undefined,
    create: createHandler(schema.${entity}, ${entity.slice(0, -1)}InsertSchema),
    update: updateHandler(schema.${entity}, ${entity.slice(0, -1)}InsertSchema),
    delete: deleteHandler(schema.${entity}),
  },`;
};

const generateServerService = () => {
  const entities = getEntityList();
  return `export const serverService: Server = {${entities.map(generateEntityBlock).join("\n")}
};
`;
};

const main = () => {
  const output = `${generateHandlerHelpers()}\n\n${generateServerService()}`;
  fs.writeFileSync(OUTPUT_PATH, output);
  console.log("✅ server.ts has been generated!");
};

main();
