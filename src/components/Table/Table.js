import React, { useState } from "react";
import Button from "../Button";
import InputArea from "../InputArea";

const Table = ({
  tableTitle,
  data,
  variant,
  handler,
  isInput,
  quantity,
  colorSelector,
  sizeSelector,
  isTotal,
  errorMessage,
  handleInputChange,
  totalPrice,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleClick = (x) => {
    setSelectedValue(x);
    console.log("buraya tıkladın", x);
  };
  console.log(selectedValue);
  return (
    <div className="flex justify-start items-center ml-3">
      <div className="">
        <p
          className={`flex justify-between text-sm w-28 ${
            isTotal && "font-semibold text-lg"
          }`}
        >
          <span>{tableTitle}</span>
          <span>:</span>
        </p>
      </div>
      <br />
      <div
        className={`flex flex-row ${
          tableTitle === "Adet" ? "justify-between w-full" : "justify-start"
        } items-center p-3`}
      >
        {!isTotal ? (
          isInput ? (
            <InputArea
              variant={variant}
              errorMessage={errorMessage}
              handleInputChange={handleInputChange}
            />
          ) : (
            data?.map((item, index) => (
              <Button
                key={index}
                tableTitle={tableTitle}
                item={item}
                variant={variant}
                handler={handler}
                quantity={quantity}
                isLast={index === data.length - 1}
                colorSelector={colorSelector}
                sizeSelector={sizeSelector}
                handleClick={handleClick}
              />
            ))
          )
        ) : (
          <div className="flex flex-col ">
            <p className="text-3xl font-bold ">
              {totalPrice ? totalPrice : "Seçim yapınız."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
