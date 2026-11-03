import fs from 'fs';
import path from 'path';
import { SITE, COMPLIANCE } from '../src/config/site.js';

console.log('--- RUNNING WEBFORGE CROSSCHECK ---');

let failures = 0;

// B1. Domain Check
if (SITE.domain === 'DOMAIN.com') {
  console.error('❌ B1: SITE.domain is still DOMAIN.com');
  failures++;
}

// B6. Agent Files Presence
// robots.txt is served from app/robots.ts (single source), so either that route or a static file satisfies this check
if (!fs.existsSync('app/robots.txt/route.ts') && !fs.existsSync('app/robots.ts') && !fs.existsSync('public/robots.txt')) {
  console.error('❌ B6: No robots.txt source (app/robots.ts or public/robots.txt)');
  failures++;
}
const agentFiles = [
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
];

agentFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`❌ B6: Missing agent file: ${f}`);
    failures++;
  }
});

// B7. Compliance Scan (Banned Terms)
const buildDir = 'public'; // In a real build we'd scan 'out' or '.next'
const bannedTerms = COMPLIANCE.bannedTerms;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanDir(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.txt') || file.endsWith('.json') || file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf8');
      bannedTerms.forEach(term => {
        if (content.toLowerCase().includes(term.toLowerCase())) {
          console.error(`❌ B7: Banned term "${term}" found in ${filePath}`);
          failures++;
        }
      });
    }
  });
}

scanDir(buildDir);

// C1: a prerendered page must never contain a stringified object or an undefined value in a URL (broken images and links).
const builtDir = '.next/server/app';
if (fs.existsSync(builtDir)) {
  const badPatterns = ['[object Object]', '%5Bobject%20Object%5D', '/images/undefined', '/images/null', 'href="undefined"', 'src="undefined"'];
  const scanBuilt = dir => {
    for (const file of fs.readdirSync(dir)) {
      const p = path.join(dir, file);
      if (fs.statSync(p).isDirectory()) scanBuilt(p);
      else if (file.endsWith('.html')) {
        const html = fs.readFileSync(p, 'utf8');
        badPatterns.forEach(bad => {
          if (html.includes(bad)) { console.error(`❌ C1: broken value "${bad}" in ${p}`); failures++; }
        });
      }
    }
  };
  scanBuilt(builtDir);
}

if (failures > 0) {
  console.error(`\nTotal Failures: ${failures}`);
  process.exit(1);
} else {
  console.log('✅ ALL CHECKS PASSED');
  process.exit(0);
}
