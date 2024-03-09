import React from "react";
import DataTable from "../DataTable";

const SizeTable = ({
  data,
  variant,
  setSizeSelector,
  colorSelector,
  selectedAttributes,
}) => {
  const sizeValues =
    data.selectableAttributes.find((attribute) => attribute.name === "Beden")
      ?.values || [];

  const handleSizeChange = (size) => {
    setSizeSelector(size);
  };
  return (
    <>
      <DataTable
        tableTitle={"Beden"}
        data={sizeValues}
        variant={variant}
        handler={handleSizeChange}
        colorSelector={colorSelector}
        selectedAttributes={selectedAttributes}
      />
    </>
  );
};

export default SizeTable;
