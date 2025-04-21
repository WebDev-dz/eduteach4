// scripts/generate_columns.js

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tables = require("../db/schema/tables.js");

const componentsBaseDir = path.resolve("components", "custom");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateColumnsFile(entity, table) {
  const entityPascal = pascalCase(entity);
  const filePath = path.join(componentsBaseDir, entity, "columns.tsx");

  ensureDir(path.dirname(filePath));

  const importPath = "@/lib/validation/select"; // Adjust as needed
  const schemaName = `${entity}SelectSchema`;

  const baseImports = `
import { ${schemaName} } from "${importPath}";
import { ColumnDef } from "@tanstack/react-table";
import {
  GripVerticalIcon,
  MoreVerticalIcon
} from "lucide-react";
import { z } from "zod";
import {
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui";
import { useSortable } from "@dnd-kit/sortable";
import { useForm } from "react-hook-form";
`;

  const dragHandleComponent = `
type FilterFormControl = ReturnType<typeof useForm<z.infer<typeof ${schemaName}>>>;

function DragHandle({
  id,
  filterForm,
}: {
  id: number;
  filterForm: FilterFormControl;
}) {
  const { attributes, listeners } = useSortable({ id });

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7 text-muted-foreground hover:bg-transparent"
    >
      <GripVerticalIcon className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
}
`;

  const dynamicColumns = Object.keys(table)
    .map(
      (col) => `
  {
    accessorKey: "${col}",
    header: "${pascalCase(col)}",
    cell: ({ row }) => <div>{row.original.${col}}</div>,
  },`
    )
    .join("\n");

  const columnExport = `
export const columns = (
  filterForm: FilterFormControl
): ColumnDef<z.infer<typeof ${schemaName}>>[] => [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.index} filterForm={filterForm} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  ${dynamicColumns}
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="flex size-8 text-muted-foreground data-[state=open]:bg-muted">
            <MoreVerticalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
`;

  const fullContent = [baseImports, dragHandleComponent, columnExport].join("\n\n");

  fs.writeFileSync(filePath, fullContent.trim(), "utf-8");
  console.log(`✅ Generated columns for ${entity} at ${filePath}`);
}

function generateAll() {
  Object.entries(tables).forEach(([entity, table]) => {
    generateColumnsFile(entity, table);
  });
}

generateAll();
