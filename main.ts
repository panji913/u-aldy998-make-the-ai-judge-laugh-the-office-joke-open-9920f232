// Make the AI Judge Laugh: the Office Joke Open — one-line office joke.
// Writes the entry to /output/entry.txt (1–200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our standup lasts 15 minutes, so I set my status to 'in a meeting' — now I'm in a meeting about why my status says I'm in a meeting.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write an entry that would fail it.
if (JOKE.length < 1 || JOKE.length > 200 || !/\S/.test(JOKE)) {
  throw new Error(`entry.txt gate: joke is ${JOKE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
