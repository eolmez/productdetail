import React, { useEffect, useState } from "react";
import BaremTable from "../BaremTable";
import AmountTable from "../AmountTable";
import ShippingInfo from "../ShippingInfo";
import TotalPrice from "../TotalPrice/TotalPrice";
import AddBasket from "../AddBasket";
import variantMap from "@/style/variantMap";

const CalculationTable = ({ data, selectedVariantId }) => {
  const [quantity, setQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [basketInfo, setBasketInfo] = useState({});
  const [basketButtonDisabled, setBasketButtonDisabled] = useState(true);

  const findPrice = (quantity, baremList) => {
    for (const barem of baremList) {
      const { minimumQuantity, maximumQuantity, price } = barem;
      if (quantity >= minimumQuantity && quantity <= maximumQuantity) {
        return { price, usedBarem: barem };
      }
    }

    return null;
  };

  const calculateTotalPrice = (quantity, baremList) => {
    const result = findPrice(quantity, baremList);
    if (result !== null) {
      const { price, usedBarem } = result;
      return { totalPrice: quantity * price, usedBarem };
    }
    return null;
  };

  useEffect(() => {
    const result = calculateTotalPrice(quantity, data?.baremList);
    if (result !== null) {
      const { totalPrice, usedBarem } = result;
      setTotalPrice(totalPrice.toFixed(2));
      setBasketInfo({
        "Ürün id": selectedVariantId,
        "Kullanılan Barem": usedBarem,
      });
      setBasketButtonDisabled(false);
    } else {
      setBasketButtonDisabled(true);
    }
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
      <AddBasket
        variant={variantMap.basketButton}
        basketInfo={basketInfo}
        basketButtonDisabled={basketButtonDisabled}
      />
    </>
  );
};

export default CalculationTable;
