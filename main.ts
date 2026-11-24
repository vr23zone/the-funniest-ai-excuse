import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I handed your task to a cron job scheduled for February 30th. Technically, it has never been late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
