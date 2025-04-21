/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Define output file paths
const sonnerProviderOutPut = path.resolve('components/providers/sonner-provider.tsx');
const themeProviderOutPut = path.resolve('components/providers/theme-provider.tsx');
const sessionProviderOutPut = path.resolve('components/providers/session-provider.tsx');
const queryProviderOutPut = path.resolve('components/providers/query-provider.tsx');

// Ensure directory exists
const dir = path.dirname(sonnerProviderOutPut);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}


const sessionProviderContent = `"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"

export function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

`

const themeProviderContent = `'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}


`

const sonnerProviderContent = `"use client"

import { Toaster } from "sonner"

export function SonnerProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "rounded-md border bg-background text-foreground",
        duration: 3000,
      }}
    />
  )
}

`

const queryProviderContent = `"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState, type ReactNode } from "react"

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


`
fs.writeFileSync(sessionProviderOutPut, sessionProviderContent);
console.log(`Session provider generated at ${sessionProviderOutPut}`);
fs.writeFileSync(themeProviderOutPut, themeProviderContent);
console.log(`Theme provider generated at ${themeProviderOutPut}`);
fs.writeFileSync(sonnerProviderOutPut, sonnerProviderContent);
console.log(`Sonner provider generated at ${sonnerProviderOutPut}`);
fs.writeFileSync(queryProviderOutPut, queryProviderContent);
console.log(`Query provider generated at ${queryProviderOutPut}`);


