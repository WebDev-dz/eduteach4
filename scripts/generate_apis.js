/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const tables = require("../db/schema/tables.js");

// Get entity names from table exports
const entities = Object.keys(tables);

// Base directory for API routes
const apiBasePath = path.resolve(__dirname, "../app/api");

// Template for `app/api/{entity}/route.ts`
const collectionRouteTemplate = (entity) => `import { serverService } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams);
  const data = await serverService.${entity}.findMany({ where: searchParams });
  return NextResponse.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = await serverService.${entity}.create?.(body);
  return NextResponse.json(data);
}

export async function PUT(req) {
  const body = await req.json();
  const data = await serverService.${entity}.update?.(body);
  return NextResponse.json(data);
}

export async function DELETE(req) {
  const body = await req.json();
  const data = await serverService.${entity}.delete?.(body);
  return NextResponse.json(data);
}
`;

// Template for `app/api/{entity}/[id]/route.ts`
const singleRouteTemplate = (entity) => `import { serverService } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const data = await serverService.${entity}.findFirst({
    where: { id: params.id },
  });
  return NextResponse.json(data);
}

export async function DELETE(_, { params }) {
  const data = await serverService.${entity}.delete?.({
    id: params.id,
  });
  return NextResponse.json(data);
}
`;

function ensureDir(pathname) {
  if (!fs.existsSync(pathname)) {
    fs.mkdirSync(pathname, { recursive: true });
  }
}

function generateApiRoutes() {
  ensureDir(apiBasePath);

  entities.forEach((entity) => {
    const entityPath = path.join(apiBasePath, entity);
    const idPath = path.join(entityPath, "[id]");

    ensureDir(entityPath);
    ensureDir(idPath);

    const collectionRoutePath = path.join(entityPath, "route.ts");
    const idRoutePath = path.join(idPath, "route.ts");

    fs.writeFileSync(collectionRoutePath, collectionRouteTemplate(entity), "utf8");
    fs.writeFileSync(idRoutePath, singleRouteTemplate(entity), "utf8");

    console.log(`✅ Created API routes for: ${entity}`);
  });
}

generateApiRoutes();
