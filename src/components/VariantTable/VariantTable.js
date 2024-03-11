import React from "react";
import ColorTable from "../ColorTable";
import SizeTable from "../SizeTable";
import variantMap from "@/style/variantMap";

const VariantTable = ({ data, selectedVariant }) => {
  const selectedAttributes = selectedVariant?.attributes?.map(
    (attribute) => attribute?.value
  );

  const findValueByName = (attributes, attributeName) => {
    const attribute = attributes.find((attr) => attr.name === attributeName);
    return attribute ? attribute.value : null;
  };

  const findSizesByColor = (color) => {
    return data.productVariants
      .filter((variant) =>
        variant.attributes.some(
          (attribute) => attribute.name === "Renk" && attribute.value === color
        )
      )
      .map(
        (variant) =>
          variant.attributes.find((attribute) => attribute.name === "Beden")
            .value
      );
  };
  const findColosrBySize = (size) => {
    return data.productVariants
      .filter((variant) =>
        variant.attributes.some(
          (attribute) => attribute.name === "Beden" && attribute.value === size
        )
      )
      .map(
        (variant) =>
          variant.attributes.find((attribute) => attribute.name === "Renk")
            .value
      );
  };
  return (
    <>
      <ColorTable
        data={data}
        variant={variantMap?.tableButton}
        selectedAttributes={selectedAttributes}
        enabledVariant={findColosrBySize(
          findValueByName(selectedVariant?.attributes, "Beden")
        )}
      />
      <SizeTable
        data={data}
        variant={variantMap?.tableButton}
        selectedAttributes={selectedAttributes}
        enabledVariant={findSizesByColor(
          findValueByName(selectedVariant?.attributes, "Renk")
        )}
      />
    </>
  );
};

export default VariantTable;
