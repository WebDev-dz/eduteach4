/* eslint-disable @typescript-eslint/no-require-imports */
// initialize-shadcn.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎨 Starting ShadCN UI initialization...');

// Base directory for the project
const baseDir = process.cwd();

// List of all available shadcn/ui components
// This list is current as of April 2025
const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'button',
  'calendar',
  'card',
  'carousel',
  'checkbox',
  'collapsible',
  'command',
  'context-menu',
  'data-table',
  'date-picker',
  'dialog',
  'drawer',
  'dropdown-menu',
  'form',
  'hover-card',
  'input',
  'label',
  'menubar',
  'navigation-menu',
  'pagination',
  'popover',
  'progress',
  'radio-group',
  'resizable',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'skeleton',
  'slider',
  'sonner',
  'switch',
  'table',
  'tabs',
  'textarea',
  'table',
  'toast',
  'toggle',
  'toggle-group',
  'tooltip',
  'use-toast'
];

const indexFileOutput = path.join(baseDir, 'components', 'ui', 'index.ts');

const indexFileContent = `
export * from "./accordion"
export * from "./alert"
export * from "./alert-dialog"
export * from "./aspect-ratio"
export * from "./avatar"
export * from "./badge"
export * from "./breadcrumb"
export * from "./button"
export * from "./calendar"
export * from "./card"
export * from "./carousel"
export * from "./checkbox"
export * from "./collapsible"
export * from "./command"
export * from "./context-menu"
export * from "./dialog"
export * from "./drawer"
export * from "./dropdown-menu"
export * from "./form"
export * from "./hover-card"
export * from "./input"
export * from "./input-otp"
export * from "./label"
export * from "./menubar"
export * from "./navigation-menu"
export * from "./pagination"
export * from "./popover"
export * from "./progress"
export * from "./radio-group"
export * from "./resizable"
export * from "./scroll-area"
export * from "./select"
export * from "./separator"
export * from "./sheet"
export * from "./sidebar"
export * from "./skeleton"
export * from "./slider"
export * from "./sonner"
export * from "./switch"
export * from "./table"
export * from "./tabs"
export * from "./textarea"
export * from "./toast"
export * from "./toggle"
export * from "./toggle-group"
export * from "./tooltip"
`;

// Function to run shell commands safely
function runCommand(command) {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit', cwd: baseDir });
    return true;
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error.message);
    return false;
  }
}

// Function to check if package is installed
function isPackageInstalled(packageName) {
  try {
    const packageJsonPath = path.join(baseDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return (
      (packageJson.dependencies && packageJson.dependencies[packageName]) ||
      (packageJson.devDependencies && packageJson.devDependencies[packageName])
    );
  } catch (error) {
    console.error(`Failed to check package installation: ${error.message}`);
    return false;
  }
}

// Step 1: Install required dependencies if not already installed
console.log('📦 Installing required dependencies...');
const packages = [
  'tailwindcss',
  'postcss',
  'autoprefixer',
  'shadcn-ui',
  '@radix-ui/react-icons',
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'tailwindcss-animate'
];

for (const pkg of packages) {
  if (!isPackageInstalled(pkg)) {
    console.log(`Installing ${pkg}...`);
    runCommand(`npm install ${pkg}`);
  } else {
    console.log(`${pkg} is already installed.`);
  }
}

// Step 2: Initialize shadcn-ui if not already initialized
console.log('🚀 Initializing shadcn-ui...');

// Check if shadcn is already initialized by looking for components.json
const componentsJsonPath = path.join(baseDir, 'components.json');
if (!fs.existsSync(componentsJsonPath)) {
  console.log('Setting up shadcn/ui for the first time...');
  runCommand('npx shadcn@latest init');
} else {
  console.log('shadcn/ui is already initialized.');
}

// Step 3: Add all UI components one by one
console.log('🧩 Installing all UI components...');

// Create a directory to store the installation logs
const logsDir = path.join(baseDir, '.shadcn-logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const successfulComponents = [];
const failedComponents = [];

for (const component of components) {
  console.log(`Installing component: ${component}`);
  try {
    // Check if component directory already exists
    const componentDir = path.join(baseDir, 'components', 'ui', component);
    if (fs.existsSync(componentDir)) {
      console.log(`Component ${component} is already installed, skipping...`);
      successfulComponents.push(component);
      continue;
    }
    
    // Try to install the component
    const result = execSync(`npx shadcn@latest add ${component}`, { 
      stdio: 'pipe',
      cwd: baseDir 
    }).toString();
    console.log(result)
    console.log(`✅ Successfully installed ${component}`);
    successfulComponents.push(component);
  } catch (error) {
    console.error(`❌ Failed to install ${component}: ${error}`);
    
    // Save error details to a log file
    const logFile = path.join(logsDir, `${component}-error.log`);
    fs.writeFileSync(logFile, error.toString());
    
    failedComponents.push(component);
  }
}

// Step 4: Create an index.ts file that exports all components
console.log('📝 Creating component index file...');

// Find all the installed component directories
const uiDir = path.join(baseDir, 'components', 'ui');
if (!fs.existsSync(uiDir)) {
  fs.mkdirSync(uiDir, { recursive: true });
}

// Create directories if they don't exist
const componentsDir = path.join(baseDir, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Generate re-export statements for all successfully installed components
let indexContent = '// Generated index file for shadcn/ui components\n\n';

for (const component of successfulComponents) {
  const componentDir = path.join(uiDir, component);
  
  if (fs.existsSync(componentDir)) {
    // Check if there's an index.ts or index.tsx in the component directory
    let indexFile;
    if (fs.existsSync(path.join(componentDir, 'index.ts'))) {
      indexFile = path.join(componentDir, 'index.ts');
    } else if (fs.existsSync(path.join(componentDir, 'index.tsx'))) {
      indexFile = path.join(componentDir, 'index.tsx');
      console.log(`Found index file: ${indexFile}`);
    } else {
      // If no index file, try to find individual component files
      const files = fs.readdirSync(componentDir).filter(file => 
        file.endsWith('.tsx') || file.endsWith('.ts')
      );
      
      if (files.length > 0) {
        // Just export everything from the directory
        indexContent += `export * from './ui/${component}';\n`;
      }
      continue;
    }
    
    // If we found an index file, export everything from it
    indexContent += `export * from './ui/${component}';\n`;
  }
}

// Write the index file
const uiIndexPath = path.join(componentsDir, 'index.ts');
fs.writeFileSync(uiIndexPath, indexContent);

// Step 5: Create a demo page that showcases all the components
console.log('🎭 Creating a components demo page...');

// Ensure the demo directory exists
const demoDir = path.join(baseDir, 'app/ui-components');
if (!fs.existsSync(demoDir)) {
  fs.mkdirSync(demoDir, { recursive: true });
}

// Create a demo page content
const demoPageContent = `"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ComponentsDemo() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">ShadCN UI Components</h1>
      <p className="text-muted-foreground mb-8">
        This page showcases the installed shadcn/ui components in your application.
      </p>
      
      <Tabs defaultValue="installed">
        <TabsList className="mb-4">
          <TabsTrigger value="installed">Installed Components ({successfulComponents.length})</TabsTrigger>
          <TabsTrigger value="failed">Failed Components ({failedComponents.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="installed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${successfulComponents.map(component => `
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">${component}</CardTitle>
                <CardDescription>Installed successfully</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Import from: <code className="bg-muted p-1 rounded">@/components/ui/${component}</code>
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://ui.shadcn.com/docs/components/${component}" target="_blank" rel="noopener noreferrer">
                    View Docs
                  </a>
                </Button>
              </CardFooter>
            </Card>`).join('')}
          </div>
        </TabsContent>
        
        <TabsContent value="failed" className="space-y-6">
          ${failedComponents.length === 0 ? 
          '<p>All components were installed successfully!</p>' : 
          `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${failedComponents.map(component => `
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="capitalize">${component}</CardTitle>
                <CardDescription>Installation failed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Check the log file in <code className="bg-muted p-1 rounded">.shadcn-logs/${component}-error.log</code>
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://ui.shadcn.com/docs/components/${component}" target="_blank" rel="noopener noreferrer">
                    View Docs
                  </a>
                </Button>
              </CardFooter>
            </Card>`).join('')}
          </div>`}
        </TabsContent>
      </Tabs>
      
      <Separator className="my-10" />
      
      <footer className="text-center text-sm text-muted-foreground">
        <p>
          Generated on ${new Date().toLocaleDateString()} | 
          <a href="https://ui.shadcn.com" className="underline ml-1" target="_blank" rel="noopener noreferrer">
            shadcn/ui documentation
          </a>
        </p>
      </footer>
    </div>
  );
}`.replace('successfulComponents.length', successfulComponents.length)
    .replace('failedComponents.length', failedComponents.length);

// Write the demo page
const demoPagePath = path.join(demoDir, 'page.tsx');
fs.writeFileSync(demoPagePath, demoPageContent);

// Create a summary report
console.log('\n📊 Installation Summary:');
console.log(`✅ Successfully installed: ${successfulComponents.length} components`);
console.log(`❌ Failed to install: ${failedComponents.length} components`);

if (failedComponents.length > 0) {
  console.log('\nComponents that failed to install:');
  failedComponents.forEach(component => {
    console.log(`- ${component} (see .shadcn-logs/${component}-error.log for details)`);
  });
}

console.log('\n🎉 ShadCN UI initialization complete!');
console.log('\nWhat next?');
console.log('1. Visit /ui-components in your app to see the installed components');
console.log('2. Import components from @/components/ui/{component-name}');
console.log('3. Check the shadcn/ui documentation for usage examples: https://ui.shadcn.com/docs');

// Create a .env file for shadcn if it doesn't exist
if (!fs.existsSync(indexFileOutput)) {
  fs.writeFileSync(indexFileOutput, indexFileContent);
  console.log('\nCreated index file for shadcn/ui components');
}

const shadcnEnvPath = path.join(baseDir, '.env');
if (!fs.existsSync(shadcnEnvPath)) {
  fs.writeFileSync(shadcnEnvPath, 'NEXT_PUBLIC_APP_URL=http://localhost:3000\n');
  console.log('\nCreated .env file with NEXT_PUBLIC_APP_URL for shadcn/ui');
}