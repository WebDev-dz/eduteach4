
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const appDir = path.resolve("app");

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
  const entityDir = path.join(appDir, entity);
  ensureDir(entityDir);

  // page.tsx
  const pageContent = `// Auto-generated page for ${entity}
export default function ${pascalCase(entity)}Page() {
  return (
    <div>
      <h1>${pascalCase(entity)}</h1>
      <p>List of ${entity}</p>
    </div>
  );
}`;
  writeFileIfNotExists(path.join(entityDir, "page.tsx"), pageContent);

  // loading.tsx
  const loadingContent = `// Auto-generated loading state for ${entity}
export default function Loading() {
  return <p>Loading ${entity}...</p>;
}`;
  writeFileIfNotExists(path.join(entityDir, "loading.tsx"), loadingContent);

  // [id]/page.tsx
  const idDir = path.join(entityDir, "[id]");
  ensureDir(idDir);
  const idPageContent = `// Auto-generated details page for ${entity}
export default function ${pascalCase(entity)}DetailPage() {
  return (
    <div>
      <h1>${pascalCase(entity)} Detail</h1>
      <p>Display details for selected ${entity}</p>
    </div>
  );
}`;
  writeFileIfNotExists(path.join(idDir, "page.tsx"), idPageContent);

  // edit/page.tsx
  const editDir = path.join(entityDir, "edit");
  ensureDir(editDir);
  const editPageContent = `// Auto-generated edit page for ${entity}
export default function Edit${pascalCase(entity)}Page() {
  return (
    <div>
      <h1>Edit ${pascalCase(entity)}</h1>
      <p>Form to edit ${entity}</p>
    </div>
  );
}`;
  writeFileIfNotExists(path.join(editDir, "page.tsx"), editPageContent);
});
