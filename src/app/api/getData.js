import { promises as fs } from "fs";

export default async function getData() {
  const jsonPath = path.join(process.cwd() + "/src/app/product.json", "utf8");
  const file = await fs.readFile(jsonPath);
  const data = JSON.parse(file);
  return data;
}
