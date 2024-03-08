import { useState } from "react";

const Button = ({
  tableTitle,
  item,
  variant,
  handler,
  quantity,
  isLast,
  colorSelector,
  sizeSelector,
  handleClick,
}) => {
  console.log(item);
  const isDisabled =
    (colorSelector === "Siyah" && (item === "M" || item === "XL")) ||
    ((sizeSelector === "M" || sizeSelector === "XL") && item === "Siyah");

  const buttonClass = `${variant} ${
    quantity >= item?.minimumQuantity && quantity <= item?.maximumQuantity
      ? "bg-yellow-200"
      : ""
  } ${isLast ? (tableTitle === "Toptan Fiyat" ? "border-none" : "") : ""}`;

  return (
    <button
      className={buttonClass}
      onClick={() => {
        // const urlParams = new URLSearchParams(window.location.search);
        // const selectedColor =
        //   tableTitle === "Renk" ? item : urlParams.get("renk");
        // const selectedSize =
        //   tableTitle === "Beden" ? item : urlParams.get("beden");

        // if (selectedColor && selectedSize) {
        //   urlParams.set("renk", tableTitle === "Renk" ? item : selectedColor);
        //   urlParams.set("beden", tableTitle === "Beden" ? item : selectedSize);
        // } else {
        //   urlParams.set(tableTitle === "Renk" ? "renk" : "beden", item);
        // }

        // const newUrl = `${window.location.pathname}/${selectedColor}-${selectedSize}`;

        // window.history.pushState({}, "", newUrl);
        handleClick(item);
        if (tableTitle !== "Toptan Fiyat" && handler) {
          handler(item);
        }
      }}
      disabled={isDisabled || tableTitle === "Toptan Fiyat"}
    >
      {tableTitle !== "Toptan Fiyat"
        ? `${item}`
        : `${item?.minimumQuantity}-${item?.maximumQuantity
            .toString()
            .slice(0, 4)}`}
      <br />
      {item?.price}
    </button>
  );
};

export default Button;
