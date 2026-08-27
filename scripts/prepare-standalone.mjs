import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

if (process.env.VERCEL) {
  console.log('Skipping standalone prepare on a managed Next.js platform.');
  process.exit(0);
}

const root = process.cwd();
const standalone = resolve(root, '.next/standalone');
await mkdir(resolve(standalone, '.next'), { recursive: true });
await rm(resolve(standalone, 'public'), { recursive: true, force: true });
await rm(resolve(standalone, '.next/static'), { recursive: true, force: true });
await cp(resolve(root, 'public'), resolve(standalone, 'public'), { recursive: true });
await cp(resolve(root, '.next/static'), resolve(standalone, '.next/static'), { recursive: true });
console.log('Prepared .next/standalone with public and static assets.');
