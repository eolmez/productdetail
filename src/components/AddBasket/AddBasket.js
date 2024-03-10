import React, { useEffect } from "react";
import Button from "../Button";

const AddBasket = ({ variant, basketInfo, basketButtonDisabled }) => {
  useEffect(() => {
    if (!basketButtonDisabled) {
      console.log(basketInfo);
    }
  }, [basketInfo, basketButtonDisabled]);

  return (
    <div className="flex justify-start items-center mt-4">
      <div className="flex w-28"></div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-start">
        <Button
          item={"Sepete Ekle"}
          variant={variant}
          basketButtonDisabled={basketButtonDisabled}
        />
        <p className="ml-6 mt-1 text-blue-700 text-sm">Ödeme Seçenekleri</p>
      </div>
    </div>
  );
};

export default AddBasket;
