import DataTable from "../DataTable";

const ColorTable = ({ data, variant, setColorSelector, sizeSelector }) => {
  const colorValues =
    data.selectableAttributes.find((attribute) => attribute.name === "Renk")
      ?.values || [];

  const handleColorChange = (color) => {
    setColorSelector(color);
  };
  return (
    <>
      <DataTable
        tableTitle={"Renk"}
        data={colorValues}
        variant={variant}
        handler={handleColorChange}
        sizeSelector={sizeSelector}
      />
    </>
  );
};

export default ColorTable;
