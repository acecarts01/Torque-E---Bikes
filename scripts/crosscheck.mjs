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
const agentFiles = [
  'public/robots.txt',
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/ucp'
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

if (failures > 0) {
  console.error(`\nTotal Failures: ${failures}`);
  process.exit(1);
} else {
  console.log('✅ ALL CHECKS PASSED');
  process.exit(0);
}
