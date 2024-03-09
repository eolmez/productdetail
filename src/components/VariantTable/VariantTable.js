import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ColorTable from "../ColorTable";
import SizeTable from "../SizeTable";

const VariantTable = ({ data, variantMap, selectedVariant }) => {
  const { color, size } = useParams();
  const colorSplited = color?.split("-")[0];
  const sizeSplited = size?.split("-")[0];
  const [colorSelector, setColorSelector] = useState(colorSplited);
  const [sizeSelector, setSizeSelector] = useState(sizeSplited);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  useEffect(() => {
    const attributeValues = selectedVariant.attributes.map(
      (attribute) => attribute.value
    );
    setSelectedAttributes(attributeValues);
  }, []);
  return (
    <>
      <ColorTable
        data={data}
        variant={variantMap.tableButton}
        sizeSelector={sizeSelector}
        setColorSelector={setColorSelector}
        selectedAttributes={selectedAttributes}
      />
      <SizeTable
        data={data}
        variant={variantMap.tableButton}
        colorSelector={colorSelector}
        setSizeSelector={setSizeSelector}
        selectedAttributes={selectedAttributes}
      />
    </>
  );
};

export default VariantTable;
