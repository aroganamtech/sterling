/**
 * Restores CRLF line endings across the source tree.
 *
 * The retheme was applied with scripted edits that normalised the touched files
 * to LF. This repo is CRLF, so run this once to avoid whole-file diffs:
 *
 *   node fix-line-endings.mjs
 *
 * It is idempotent and safe to re-run. Delete it afterwards if you like.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOTS = ['src'];
const EXTRA = ['tailwind.config.js', 'index.html', 'theme-preview.html'];
const EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json', '.md']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (EXTS.has(extname(name))) out.push(p);
  }
  return out;
}

const files = [...ROOTS.flatMap((r) => walk(r)), ...EXTRA];
let changed = 0;

for (const f of files) {
  let s;
  try {
    s = readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  const crlf = s.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
  if (crlf !== s) {
    writeFileSync(f, crlf, 'utf8');
    changed++;
    console.log('  fixed', f);
  }
}

console.log(`\n${changed} file(s) converted to CRLF out of ${files.length} scanned.`);
