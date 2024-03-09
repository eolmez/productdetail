import ProductPage from "@/components/ProductPage";
import getData from "../api/getData";

export default async function Page() {
  const data = await getData();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <a href="/siyah-renk/l-beden">Ürüne git</a>
    </div>
  );
}
