/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

// const entitiesDir = path.resolve(__dirname, "");
const servicesDir = path.resolve(__dirname, "src/services");

// Import the tables from your schema
const tables = require('../db/schema/tables.js');

// Get all table names using the providsed method
const entities = Object.keys(tables);

if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });

const toPascalCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const createServiceFile = (entity) => {
  const pascal = toPascalCase(entity);
  const filePath = path.join(servicesDir, `${entity}-service.ts`);

  const content = `// @/services/${entity}-service
"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ${pascal}Service } from "@/types/services";
import { ${pascal}CreateInput, ${pascal}UpdateInput } from "@/types/entities";
import { toUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const ${entity}Keys = {
  all: ["${entity}s"] as const,
  lists: () => [...${entity}Keys.all, "list"] as const,
  list: (filters: Record<string, any>) => [...${entity}Keys.lists(), filters] as const,
  details: () => [...${entity}Keys.all, "detail"] as const,
  detail: (id: string) => [...${entity}Keys.details(), id] as const,
};

export function use${pascal}s() {
  return useQuery({
    queryKey: ${entity}Keys.list({}),
    queryFn: () => ${entity}ClientService.fetch${pascal}s(),
  });
}

export function use${pascal}(id: string) {
  return useQuery({
    queryKey: ${entity}Keys.detail(id),
    queryFn: () => ${entity}ClientService.fetch${pascal}ById(id),
    enabled: !!id,
  });
}

export function useCreate${pascal}() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: ${entity}ClientService.create${pascal},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ${entity}Keys.lists() });
      toast.success("${pascal} created successfully");
      router.push("/${entity}s");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useUpdate${pascal}() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ${entity}ClientService.update${pascal},
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ${entity}Keys.detail(variables.id) });
      toast.success("${pascal} updated successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useDelete${pascal}() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ${entity}ClientService.delete${pascal},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ${entity}Keys.lists() });
      toast.success("${pascal} deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export const ${entity}ClientService: ${pascal}Service = {
  baseRoute: "/api/${entity}s",
  routes: {
    fetch${pascal}s: () => toUrl(${entity}ClientService.baseRoute),
    fetch${pascal}ById: (id: string) => toUrl(${entity}ClientService.baseRoute, { id }),
    create${pascal}: () => toUrl(${entity}ClientService.baseRoute),
    update${pascal}: (id: string) => toUrl(${entity}ClientService.baseRoute, { id }),
    delete${pascal}: (id: string) => toUrl(${entity}ClientService.baseRoute, { id }),
  },
  fetch${pascal}s: async () => {
    const res = await fetch(${entity}ClientService.routes.fetch${pascal}s());
    if (!res.ok) throw new Error("Failed to fetch ${entity}s");
    return res.json();
  },
  fetch${pascal}ById: async (id: string) => {
    const res = await fetch(${entity}ClientService.routes.fetch${pascal}ById(id));
    if (!res.ok) throw new Error("Failed to fetch ${entity}");
    return res.json();
  },
  create${pascal}: async (data: ${pascal}CreateInput) => {
    const res = await fetch(${entity}ClientService.routes.create${pascal}(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to create ${entity}");
    }
    return res.json();
  },
  update${pascal}: async (data: ${pascal}UpdateInput) => {
    const res = await fetch(${entity}ClientService.routes.update${pascal}(data.id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to update ${entity}");
    }
    return res.json();
  },
  delete${pascal}: async (id: string) => {
    const res = await fetch(${entity}ClientService.routes.delete${pascal}(id), {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete ${entity}");
    return res.json();
  },
};
`;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Created service file: ${filePath}`);
};

// Get all entity files from the types/entities directory


const uniqueEntities = [...new Set(entities)];

uniqueEntities.forEach(createServiceFile);
