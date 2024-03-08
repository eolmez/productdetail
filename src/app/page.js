import ProductPage from "@/components/ProductPage";
import { promises as fs } from "fs";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/product.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductPage data={data} />
    </div>
  );
}
