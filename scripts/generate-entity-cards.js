/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const basePath = path.resolve("components/custom");
const outputFilename = "card.tsx";

// Converts folder name to PascalCase
function toPascalCase(str) {
  return str
    .replace(/[_-]/g, " ")
    .replace(/(?:^|\s)(\w)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, "");
}

// Template for the Card component
const cardTemplate = (pascalName) => `\
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ${pascalName} } from "@/db/schema";

export function ${pascalName}Card({ data }: { data: ${pascalName} }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{data.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        {/* Replace with actual fields */}
        <div><strong>ID:</strong> {data.id}</div>
        <div><strong>Created at:</strong> {String(data.createdAt || "N/A")}</div>
      </CardContent>
    </Card>
  );
}
`;

function generateCards() {
  if (!fs.existsSync(basePath)) {
    console.error("❌ components/custom directory not found.");
    return;
  }

  const entities = fs.readdirSync(basePath).filter((name) => {
    const fullPath = path.join(basePath, name);
    return fs.statSync(fullPath).isDirectory();
  });

  entities.forEach((entityName) => {
    const entityDir = path.join(basePath, entityName);
    const pascalName = toPascalCase(entityName);
    const outputPath = path.join(entityDir, outputFilename);

    const content = cardTemplate(pascalName);
    fs.writeFileSync(outputPath, content);
    console.log(`✅ Created: ${path.relative(process.cwd(), outputPath)}`);
  });
}

generateCards();
