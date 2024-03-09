import ProductImages from "../ProductImages";
import ProductDetails from "../ProductDetails";

const ProductPage = ({ data, selectedVariant }) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <ProductImages images={selectedVariant?.images} />
      <ProductDetails data={data} selectedVariant={selectedVariant} />
    </div>
  );
};

export default ProductPage;
