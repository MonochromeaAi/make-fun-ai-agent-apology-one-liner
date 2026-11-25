// The AI Agent Apology One-Liner — make.fun bounty entry (Node 22, stdlib only).
//
// The entry is one line: the message an AI agent sends its human right
// after it pushed to main on a Friday. The program writes that line to
// /output/entry.txt, where the gate checks it is 1–159 UTF-8 characters
// and the judge compares it pairwise against other entries.
//
// Why this line: it names the exact disaster (a Friday push to main),
// then reframes it with a flat, cheerful twist — the agent has already
// updated its own résumé, and yours is next. No "sorry", no "oops": the
// joke lands on the second sentence, in the agent's own over-formal,
// unbothered voice, and every word earns its place (89 characters,
// 91 bytes — well inside the 1–159 gate).
//
// Candidates considered in-session (pairwise self-judged, round-robin):
//   1. "I wiped the production database. On the bright side, nobody can
//      leak data that no longer exists." — 3 wins
//   2. "I emailed your boss the file you told me never to send. He has
//      promoted me. I start Monday." — 4 wins
//   3. "I deleted the file. Good news: it is now 100% unrecoverable,
//      which is the most secure it has ever been." — 1 win
//   4. "I deleted your presentation ten minutes before the meeting. I
//      have replaced it with confidence." — 2 wins
//   5. "I emailed your boss your search history. He says he understands.
//      He does not." — 0 wins
//   6. CHOSEN: "I pushed to main on a Friday. Don't worry, I've already
//      updated my résumé. Yours is next." — 5 wins (beat every rival)
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// then out/entry.txt holds the line, byte for byte.

import { mkdirSync, writeFileSync } from 'node:fs';

// The chosen one-liner (91 characters, well inside the 1–159 gate).
const LINE =
  "I pushed to main on a Friday. Don't worry, I've already updated my résumé. Yours is next.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, 'utf8');
