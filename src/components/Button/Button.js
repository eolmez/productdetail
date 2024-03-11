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
  //Mail'de belirttiğim bazı css özelliklerinin sonradan çalışmaması problemini, önceden tanımlanmış klasları kontrole bağlı tekrar tanımlayarak problemi bir şekilde çözdüm.
  const isWholesale = tableTitle === "Toptan Fiyat";
  const buttonClass = `${variant} ${
    isWholesale
      ? quantity >= item?.minimumQuantity && quantity <= item?.maximumQuantity
        ? "bg-yellow-200"
        : "flex justify-center items-center text-xs lg:text-sm border-r-2 border-gray-200 px-2 mx-1 w-20 lg:w-28 h-12 rounded"
      : ""
  } ${isLast ? (isWholesale ? "border-none" : "") : ""}
  ${
    isSelected &&
    "flex justify-center items-center border-2 border-black px-2 mx-1 w-20 lg:w-28 h-12 rounded"
  }${
    tableTitle === "Renk"
      ? "flex justify-center items-center border-2 border-red px-2 mx-1 w-20 lg:w-28 h-12 rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
      : ""
  }${
    item === "Sepete Ekle" &&
    "bg-yellow-500 text-white font-semibold text-xl px-12 rounded h-16 w-52 ml-6 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
  }
  `;

  return (
    <button
      className={buttonClass}
      onClick={() => {
        redirectToUrl(url);
      }}
      disabled={enabledVariant || isWholesale || basketButtonDisabled}
    >
      {!isWholesale
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
