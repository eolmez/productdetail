const Button = ({
  tableTitle,
  item,
  url,
  variant,
  quantity,
  isLast,
  currentColor,
  currentSize,
  redirectionClick,
  isSelected,
  basketButtonDisabled,
}) => {
  const isDisabled =
    (currentColor === "siyah" && (item === "M" || item === "XL")) ||
    ((currentSize === "m" || currentSize === "xl") && item === "Siyah");

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
      }}
      disabled={
        isDisabled || tableTitle === "Toptan Fiyat" || basketButtonDisabled
      }
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
