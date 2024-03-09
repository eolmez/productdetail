import { promises as fs } from "fs";

export default async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/product.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
