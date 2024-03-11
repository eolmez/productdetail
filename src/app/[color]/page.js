import getData from "@/app/api/getData";
import ProductPage from "@/components/ProductPage";

export default async function Page({ params }) {
  const data = await getData();
  const color = params.color.split("-")[0];
  const selectedVariant = data.productVariants.filter((variant) =>
    variant.attributes.some((attr) => attr.value.toLowerCase() === color)
  )[0];
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductPage data={data} selectedVariant={selectedVariant} />
    </div>
  );
}
