// joke-about-the-demo — writes one one-line joke about working beside an AI
// coding agent to /output/entry.txt. Node 22, stdlib only, no network,
// deterministic: every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Mid-demo, my agent confidently deleted the production database, apologised in perfect grammar, and the client offered it my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
