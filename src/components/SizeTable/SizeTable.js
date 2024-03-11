import React from "react";
import DataTable from "../DataTable";

const SizeTable = ({ data, variant, selectedAttributes, enabledVariant }) => {
  const sizeValues = data?.selectableAttributes?.find(
    (attribute) => attribute?.name === "Beden"
  )?.values;

  return (
    <>
      <DataTable
        tableTitle={"Beden"}
        data={sizeValues}
        variant={variant}
        selectedAttributes={selectedAttributes}
        enabledVariant={enabledVariant}
      />
    </>
  );
};

export default SizeTable;
