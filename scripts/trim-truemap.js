import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const coursePath = resolve(root, "public", "hsc_science_all_chapters_10_mcq.json");
const mapPath = resolve(root, "public", "truemap.json");

const subjectPrefixes = {
  "HSC Physics 1st Paper": "phys_1",
  "HSC Physics 2nd Paper": "phys_2",
  "HSC Chemistry 1st Paper": "chem_1",
  "HSC Chemistry 2nd Paper": "chem_2",
  "HSC Biology 1st Paper": "bio_1",
  "HSC Biology 2nd Paper": "bio_2",
  "HSC Higher Math 1st Paper": "math_1",
  "HSC Higher Math 2nd Paper": "math_2"
};

const [courseData, mapData] = await Promise.all([
  readFile(coursePath, "utf8").then(JSON.parse),
  readFile(mapPath, "utf8").then(JSON.parse)
]);

const sourceTree = mapData?.data?.tree;
if (!sourceTree || typeof sourceTree !== "object") {
  throw new Error("truemap.json does not contain data.tree");
}

const requiredKeys = new Set();
for (const subject of courseData.subjects || []) {
  const prefix = subjectPrefixes[subject.subject];
  if (!prefix) {
    // The class-page mapping currently supports the four HSC science subjects.
    continue;
  }

  subject.chapters.forEach((_, index) => {
    requiredKeys.add(`${prefix}_${index + 1}`);
  });
}

const tree = {};
let topicCount = 0;

for (const key of [...requiredKeys].sort()) {
  const topics = sourceTree[key];
  if (!Array.isArray(topics)) continue;

  tree[key] = topics
    .filter((topic) => topic.visibility !== "private")
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
    .map(({ _id, name, order }) => ({ _id, name, order }));

  topicCount += tree[key].length;
}

const output = `${JSON.stringify({ data: { tree } }, null, 2)}\n`;
await writeFile(mapPath, output, "utf8");

console.log(`Trimmed truemap.json to ${Object.keys(tree).length} chapter mappings and ${topicCount} topics.`);
