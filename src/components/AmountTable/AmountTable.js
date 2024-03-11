import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";

const AmountTable = ({ variant, setQuantity, quantity }) => {
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const savedQuantity = localStorage.getItem("inputValue");
    if (savedQuantity) {
      setQuantity(savedQuantity);
    }
  }, []);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const isValid = checkValidity(inputValue);

    if (isValid) {
      setQuantity(inputValue);
      localStorage.setItem("inputValue", inputValue);
      setErrorMessage("");
    } else {
      if (inputValue) {
      }
      setErrorMessage("Minimum veya maksimum sayıda adet giriniz.");
      setQuantity();
    }
  };

  const checkValidity = (value) => {
    const intValue = parseInt(value);
    return intValue >= 120 && intValue <= 1000;
  };

  useEffect(() => {
    localStorage.setItem("quantity", quantity);
  }, [quantity]);
  return (
    <>
      <DataTable
        tableTitle={"Adet"}
        variant={variant}
        isInput={true}
        quantity={quantity}
        errorMessage={errorMessage}
        handleInputChange={handleInputChange}
      />
      <div className="flex justify-start items-center ml-3">
        <div className="flex w-28"></div>
        <div className="flex flex-row items-center relative ml-3 my-0 py-0">
          <div className="text-red-500 font-semibold text-xs relative min-w-24 min-h-5 ">
            {errorMessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmountTable;
