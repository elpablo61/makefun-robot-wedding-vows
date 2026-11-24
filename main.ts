import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Robot Wedding Vows — the winning line, chosen by pairwise judging
// against the published judge brief (vow form first, punchline on the last words,
// machine detail throughout: co-pilot, low battery, factory reset).
const VOW =
  "I take you to be my lawfully wedded co-pilot, to have and to hold, in sickness and in low battery, till factory reset do us part.";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 160
// characters, not only white space, on a single line. Fail loudly here
// instead of shipping an invalid entry.
const line = VOW.trim();
if (line.length < 1 || line.length > 160 || line.includes("\n")) {
  throw new Error(`vow fails the gate: ${line.length} chars`);
}
writeFileSync("/output/entry.txt", line + "\n", "utf8");
