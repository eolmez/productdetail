import React from "react";
import DataTable from "../DataTable";

const TotalPrice = ({ totalPrice }) => {
  return (
    <>
      <DataTable tableTitle={"Toplam"} isTotal={true} totalPrice={totalPrice} />
    </>
  );
};

export default TotalPrice;
