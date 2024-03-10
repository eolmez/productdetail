import DataTable from "../DataTable";

const ColorTable = ({ data, variant, currentSize, selectedAttributes }) => {
  const colorValues =
    data?.selectableAttributes?.find((attribute) => attribute?.name === "Renk")
      ?.values || [];

  return (
    <>
      <DataTable
        tableTitle={"Renk"}
        data={colorValues}
        variant={variant}
        currentSize={currentSize}
        selectedAttributes={selectedAttributes}
      />
    </>
  );
};

export default ColorTable;
