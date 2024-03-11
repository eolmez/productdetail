import ProductPage from "@/components/ProductPage";
import getData from "./api/getData";

export default async function Page() {
  const data = await getData();
  const selectedVariant = data.productVariants[0];
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductPage data={data} selectedVariant={selectedVariant} />
    </div>
  );
}
