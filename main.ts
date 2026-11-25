// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba: one unsent micro-confession, written to entry.txt.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The confession, exactly as typed, line by line (no trailing newline beyond the text).
const LINES = [
  'To: Mom',
  "I'm keeping the garage how you left it \u2014 still waiting for you to check on the weeds."
];

const text = LINES.join('\n');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outPath = join(outDir, 'entry.txt');

writeFileSync(outPath, text, 'utf8');

process.exit(0);
