/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/generate-dropdown-menus.js
const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "..", "components", "custom");
const sharedActions = ["edit", "details", "duplicate", "delete"];

function toTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateMenuItem(actionName) {
  return `
        <DropdownMenuItem onClick={() => handle${toTitle(actionName)}(row.original)}>
          ${toTitle(actionName)}
        </DropdownMenuItem>`;
}

function generateDropdownMenu(entity, actions) {
  const Entity = toTitle(entity);
  const items = [...new Set([...actions, ...sharedActions])];

  return `// @/components/custom/${entity}/dropdown-menu.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ${Entity} } from "@/types/entities";
import React from "react";

interface Props {
  row: { original: ${Entity} };
  actions: {
    ${items.map((a) => `${a}?: (data: ${Entity}) => void;`).join("\n    ")}
  };
}

export function ${Entity}DropdownMenu({ row, actions }: Props) {
  const {
    ${items.join(",\n    ")}
  } = actions;

  ${items.map(a => `const handle${toTitle(a)} = ${a} ?? (() => {});`).join("\n  ")}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        ${items.map(generateMenuItem).join("\n        ")}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`;
}

function main() {
  const entitiesDir = fs.readdirSync(basePath, { withFileTypes: true });

  for (const dirent of entitiesDir) {
    if (dirent.isDirectory()) {
      const entity = dirent.name;
      const actionPath = path.join(basePath, entity, "actions.ts");

      let actions = [];
      if (fs.existsSync(actionPath)) {
        const fileContent = fs.readFileSync(actionPath, "utf8");
        const regex = /(\w+):\s*\(.*?\)\s*=>/g;
        let match;
        while ((match = regex.exec(fileContent)) !== null) {
          actions.push(match[1]);
        }
      }

      const componentContent = generateDropdownMenu(entity, actions);
      const outputPath = path.join(basePath, entity, "dropdown-menu.tsx");
      fs.writeFileSync(outputPath, componentContent, "utf8");
      console.log(`✅ Created dropdown-menu.tsx for ${entity}`);
    }
  }
}

main();
