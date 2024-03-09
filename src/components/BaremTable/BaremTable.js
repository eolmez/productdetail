import DataTable from "../DataTable";

const BaremTable = ({ data, variant, quantity }) => {
  return (
    <>
      <DataTable
        tableTitle={"Toptan Fiyat"}
        data={data}
        variant={variant}
        quantity={quantity}
      />
    </>
  );
};

export default BaremTable;
