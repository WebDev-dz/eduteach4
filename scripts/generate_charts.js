/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const customDir = path.join(__dirname, "..", "components", "custom");
const chartFileName = "chart.tsx";

const chartTemplate = (entityPascal, entityName) => `// @/components/custom/${entityName}/chart.tsx
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 50 },
];

export function ${entityPascal}Chart() {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold capitalize">${entityName} Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
`;

function toPascalCase(str) {
  return str
    .replace(/(^|[-_])(.)/g, (_, __, char) => char.toUpperCase());
}

function generateCharts() {
  const entities = fs.readdirSync(customDir).filter((name) => {
    const fullPath = path.join(customDir, name);
    return fs.lstatSync(fullPath).isDirectory();
  });

  entities.forEach((entityName) => {
    const entityPascal = toPascalCase(entityName);
    const chartFilePath = path.join(customDir, entityName, chartFileName);

    if (!fs.existsSync(chartFilePath)) {
      fs.writeFileSync(chartFilePath, chartTemplate(entityPascal, entityName), "utf8");
      console.log(`✅ Created chart.tsx for entity: ${entityName}`);
    } else {
      console.log(`⚠️ chart.tsx already exists for entity: ${entityName}`);
    }
  });
}

generateCharts();
