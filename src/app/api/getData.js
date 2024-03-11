import { promises as fs } from "fs";
import path from "path";

export default async function getData() {
  const jsonPath = path.join(process.cwd() + "/src/app/product.json");
  const file = await fs.readFile(jsonPath);
  const data = JSON.parse(file);
  return data;
}
