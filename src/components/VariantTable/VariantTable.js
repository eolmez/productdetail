import React from "react";
import ColorTable from "../ColorTable";
import SizeTable from "../SizeTable";
import variantMap from "@/style/variantMap";

const VariantTable = ({ data, selectedVariant }) => {
  const selectedAttributes = selectedVariant?.attributes?.map(
    (attribute) => attribute?.value
  );
  const currentColor = selectedVariant?.attributes
    .find((attr) => attr.name === "Renk")
    .value.toLowerCase();
  const currentSize = selectedVariant?.attributes
    .find((attr) => attr.name === "Beden")
    .value.toLowerCase();
  return (
    <>
      <ColorTable
        data={data}
        variant={variantMap?.tableButton}
        currentSize={currentSize}
        selectedAttributes={selectedAttributes}
      />
      <SizeTable
        data={data}
        variant={variantMap?.tableButton}
        currentColor={currentColor}
        selectedAttributes={selectedAttributes}
      />
    </>
  );
};

export default VariantTable;
