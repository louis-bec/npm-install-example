import { DataCollector } from "@BeclsFlow/panda-data-collector";

const pat = "TOKEN";
const dc = new DataCollector(pat);
const inspections = await dc.getInspection(
  ["octokit/plugin-throttling.js"],
  "2023-01-01",
  "2023-05-01"
);

console.log(JSON.stringify(inspections));
