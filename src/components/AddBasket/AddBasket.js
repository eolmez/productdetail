import React from "react";
import Button from "../Button";

const AddBasket = ({ variant, productId }) => {
  return (
    <div className="flex justify-start items-center mt-4">
      <div className="flex w-28"></div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-start">
        <Button item={"Sepete Ekle"} variant={variant} />
        <p className="ml-6 mt-1 text-blue-700 text-sm">Ödeme Seçenekleri</p>
      </div>
    </div>
  );
};

export default AddBasket;
