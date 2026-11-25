// The Funniest Office Joke, Judged Head to Head
// One line about office life. The program writes the joke to entry.txt.
//
// The joke follows the winning shape for one-line joke bounties: a setup
// on something anyone who has worked in an office knows (the printer),
// a concrete detail (out of toner, a 40-page error report), and a turn
// the reader does not see coming, with the punchline last.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told the printer it was out of toner, so it printed a 40-page error report to prove me wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
