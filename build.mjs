import { rmSync, mkdirSync, copyFileSync } from 'node:fs';

const files = ['index.html', 'logo-wordmark.svg', 'favicon.ico', 'favicon-32.png', 'favicon-180.png'];

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const f of files) copyFileSync(f, `dist/${f}`);
console.log(`Copied ${files.length} files to dist/`);
