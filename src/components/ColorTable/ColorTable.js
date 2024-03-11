import DataTable from "../DataTable";

const ColorTable = ({ data, variant, selectedAttributes, enabledVariant }) => {
  const colorValues = data?.selectableAttributes?.find(
    (attribute) => attribute?.name === "Renk"
  )?.values;
  return (
    <>
      <DataTable
        tableTitle={"Renk"}
        data={colorValues}
        variant={variant}
        selectedAttributes={selectedAttributes}
        enabledVariant={enabledVariant}
      />
    </>
  );
};

export default ColorTable;
