import getData from "@/api/getData";
import ProductPage from "@/components/ProductPage";

export default async function Page({ params }) {
  const data = await getData();

  const size = params.size.split("-")[0];

  const color = params.color.split("-")[0];

  const selectedVariant = data.productVariants.find((variant) => {
    return (
      variant.attributes.some(
        (attr) => attr.name === "Renk" && attr.value.toLowerCase() === color
      ) &&
      variant.attributes.find(
        (attr) => attr.name === "Beden" && attr.value.toLowerCase() === size
      )
    );
  });
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductPage data={data} selectedVariant={selectedVariant} />
    </div>
  );
}
