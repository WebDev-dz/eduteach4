// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const apiBaseDir = path.resolve("app/api");

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFileIfNotExists(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created ${filePath}`);
  } else {
    console.log(`⚠️  Skipped ${filePath} (already exists)`);
  }
}

Object.keys(tables).forEach((entity) => {
  const entityApiDir = path.join(apiBaseDir, entity);
  ensureDir(entityApiDir);

  const routeContent = `// Auto-generated API route for ${entity}
import { NextResponse } from "next/server";
// import { getAll${pascalCase(entity)} } from "@/lib/controllers/${entity}";

export async function GET() {
  // const data = await getAll${pascalCase(entity)}();
  // return NextResponse.json(data);
  return NextResponse.json({ message: "GET ${entity}" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST ${entity}", data: body });
}
`;

  writeFileIfNotExists(path.join(entityApiDir, "route.ts"), routeContent);
});
