import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import BaremTable from "../BaremTable";
import AmountTable from "../AmountTable";
import ShippingInfo from "../ShippingInfo";
import TotalPrice from "../TotalPrice/TotalPrice";
import AddBasket from "../AddBasket";

const CalculationTable = ({ data, variantMap }) => {
  const [quantity, setQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [productId, setProductId] = useState();

  const findPrice = (quantity, baremList) => {
    for (const { minimumQuantity, maximumQuantity, price } of baremList) {
      if (quantity >= minimumQuantity && quantity <= maximumQuantity) {
        return price;
      }
    }

    return null;
  };

  const calculateTotalPrice = (quantity, baremList) => {
    const price = findPrice(quantity, baremList);
    if (price !== null) {
      return quantity * price;
    }
    return null;
  };

  const price = calculateTotalPrice(quantity, data.baremList)?.toFixed(2);

  useEffect(() => {
    setTotalPrice(price);
  }, [quantity]);
  return (
    <>
      <div className="flex flex-col justify-center bg-gray-100 md:w-[495px]">
        <BaremTable
          data={data.baremList}
          variant={variantMap.quantityButton}
          quantity={quantity}
        />
        <AmountTable
          variant={variantMap.inputButton}
          setQuantity={setQuantity}
        />
      </div>
      <TotalPrice totalPrice={totalPrice} />
      <ShippingInfo />
      <AddBasket variant={variantMap.basketButton} />
    </>
  );
};

export default CalculationTable;
