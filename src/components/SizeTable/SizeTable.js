import React from "react";
import DataTable from "../DataTable";

const SizeTable = ({ data, variant, currentColor, selectedAttributes }) => {
  const sizeValues =
    data?.selectableAttributes.find((attribute) => attribute?.name === "Beden")
      ?.values || [];

  return (
    <>
      <DataTable
        tableTitle={"Beden"}
        data={sizeValues}
        variant={variant}
        currentColor={currentColor}
        selectedAttributes={selectedAttributes}
      />
    </>
  );
};

export default SizeTable;
