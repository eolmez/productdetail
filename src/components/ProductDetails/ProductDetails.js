"use client";
import Title from "../Title";
import Comments from "../Comments";
import Price from "../Price";
import VariantTable from "../VariantTable";
import CalculationTable from "../CalculationTable";

const ProductDetails = ({ data, selectedVariant }) => {
  return (
    <div className="flex flex-col">
      <Title titleText={data?.productTitle} />
      <Comments />
      <Price data={data} />
      <VariantTable data={data} selectedVariant={selectedVariant} />
      <CalculationTable data={data} selectedVariantId={selectedVariant?.id} />
    </div>
  );
};

export default ProductDetails;
