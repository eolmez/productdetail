const Button = ({
  tableTitle,
  item,
  url,
  variant,
  handler,
  quantity,
  isLast,
  colorSelector,
  sizeSelector,
  redirectionClick,
  isSelected,
}) => {
  const isDisabled =
    (colorSelector === "siyah" && (item === "M" || item === "XL")) ||
    ((sizeSelector === "m" || sizeSelector === "xl") && item === "Siyah");

  const buttonClass = `${variant} ${
    quantity >= item?.minimumQuantity && quantity <= item?.maximumQuantity
      ? "bg-yellow-200"
      : ""
  } ${isLast ? (tableTitle === "Toptan Fiyat" ? "border-none" : "") : ""}`;
  return (
    <button
      className={`${buttonClass} ${
        isSelected &&
        "flex justify-center items-center border-2 border-black px-2 mx-1 w-20 lg:w-28 h-12 rounded"
      }`}
      onClick={() => {
        redirectionClick(url);
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
