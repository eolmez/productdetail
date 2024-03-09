import React, { useState } from "react";
import { useParams } from "next/navigation";
import ColorTable from "../ColorTable";
import SizeTable from "../SizeTable";

const VariantTable = ({ data, variantMap }) => {
  const { color, size } = useParams();
  const colorSplited = color?.split("-")[0];
  const sizeSplited = size?.split("-")[0];
  const [colorSelector, setColorSelector] = useState(colorSplited);
  const [sizeSelector, setSizeSelector] = useState(sizeSplited);
  return (
    <>
      <ColorTable
        data={data}
        variant={variantMap.tableButton}
        sizeSelector={sizeSelector}
        setColorSelector={setColorSelector}
      />
      <SizeTable
        data={data}
        variant={variantMap.tableButton}
        sizeSelector={colorSelector}
        setSizeSelector={setSizeSelector}
      />
    </>
  );
};

export default VariantTable;
