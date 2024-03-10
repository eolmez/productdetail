import React from "react";

const Price = ({ data }) => {
  const findMinimumQuantity = (baremList) => {
    let minQuantity = Infinity;

    for (const item of baremList) {
      if (item?.minimumQuantity < minQuantity) {
        minQuantity = item?.minimumQuantity;
      }
    }

    return minQuantity;
  };

  const minimumQuantity = findMinimumQuantity(data?.baremList);
  return (
    <>
      <p className="tex-lg md:text-3xl font-semibold text-black ml-3 mt-6">
        3.000,00 TL - 3.300,00 TL{" "}
        <span className="text-sm text-gray-400">/ Adet</span>
      </p>
      <p className="text-sm text-gray-400 ml-3">
        {minimumQuantity} Adet (Minumum Sipariş Adedi)
      </p>
    </>
  );
};

export default Price;
