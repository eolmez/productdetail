const Button = ({
  tableTitle,
  item,
  url,
  variant,
  quantity,
  isLast,
  redirectToUrl,
  isSelected,
  basketButtonDisabled,
  enabledVariant,
}) => {
  const isWholesale = tableTitle === "Toptan Fiyat";
  const buttonClass = `${variant} ${
    isWholesale
      ? quantity >= item?.minimumQuantity && quantity <= item?.maximumQuantity
        ? "bg-yellow-200"
        : ""
      : ""
  } ${isLast ? (isWholesale ? "border-none" : "") : ""}
  ${
    isSelected &&
    "flex justify-center items-center border-2 border-black px-2 mx-1 w-20 lg:w-28 h-12 rounded"
  }`;

  return (
    <button
      className={buttonClass}
      onClick={() => {
        redirectToUrl(url);
      }}
      disabled={enabledVariant || isWholesale || basketButtonDisabled}
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
