"use client";
import Title from "../Title";
import Comments from "../Comments";
import Price from "../Price";
import VariantTable from "../VariantTable";
import CalculationTable from "../CalculationTable";

const ProductDetails = ({ data }) => {
  const variantMap = {
    tableButton:
      "flex justify-center items-center border-2 border-gray px-2 mx-1 w-20 lg:w-28 h-12 rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none",
    quantityButton:
      "flex justify-center items-center text-xs lg:text-sm border-r-2 border-gray-200 px-2 mx-1 w-20 lg:w-28 h-12 rounded",
    inputButton:
      "flex justify-center items-center rounded-md border-none outline-none px-2 mx-1 w-20 lg:w-28 h-12 rounded focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500",
    basketButton:
      "bg-yellow-500 text-white font-semibold text-xl px-12 rounded h-16 w-52 ml-6",
  };
  return (
    <div className="flex flex-col">
      <Title titleText={data.productTitle} />
      <Comments />
      <Price data={data} />
      <VariantTable data={data} variantMap={variantMap} />
      <CalculationTable data={data} variantMap={variantMap} />
    </div>
  );
};

export default ProductDetails;
