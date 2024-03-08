"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "../ProductImages";
import ProductDetails from "../ProductDetails";

const ProductPage = ({ data }) => {
  const [colorSelector, setColorSelector] = useState("Siyah");
  const [sizeSelector, setSizeSelector] = useState("L");
  const [imageSelector, setImageSelector] = useState([
    "https://n11scdn.akamaized.net/a1/500/09/07/31/43/20981291.jpg",
    "https://n11scdn.akamaized.net/a1/500/06/23/25/42/85867976.jpg",
    "https://n11scdn.akamaized.net/a1/500/02/80/22/52/07135903.jpg",
    "https://n11scdn.akamaized.net/a1/500/08/01/96/70/10729119.jpg",
  ]);
  const [defaultImage, setDefaultImage] = useState(
    "https://n11scdn.akamaized.net/a1/500/09/07/31/43/20981291.jpg"
  );
  const [quantity, setQuantity] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState();
  const [productId, setProductId] = useState();

  const handleColorChange = (color) => {
    setColorSelector(color);
    updateSelectedImages(color, sizeSelector);
  };

  const handleSizeChange = (size) => {
    setSizeSelector(size);
    updateSelectedImages(colorSelector, size);
  };

  const updateSelectedImages = (color = "Siyah", size = "M") => {
    const selectedVariant = data.productVariants.find(
      (variant) =>
        variant.attributes.some(
          (attr) => attr.name === "Beden" && attr.value === size
        ) &&
        variant.attributes.some(
          (attr) => attr.name === "Renk" && attr.value === color
        )
    );
    if (selectedVariant) {
      setImageSelector(selectedVariant.images);
      setProductId(selectedVariant.id);
    } else {
      setImageSelector([]);
    }
  };

  const findMinimumQuantity = (baremList) => {
    let minQuantity = Infinity;

    for (const item of baremList) {
      if (item.minimumQuantity < minQuantity) {
        minQuantity = item.minimumQuantity;
      }
    }

    return minQuantity;
  };

  const minimumQuantity = findMinimumQuantity(data.baremList);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const isValid = checkValidity(inputValue);

    if (isValid) {
      setQuantity(inputValue);
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
    return intValue >= minimumQuantity && intValue <= 1000;
  };

  const findPrice = (quantity, baremList) => {
    for (const { minimumQuantity, maximumQuantity, price } of baremList) {
      if (quantity >= minimumQuantity && quantity <= maximumQuantity) {
        return price;
      }
    }

    return null;
  };

  const calculateTotalPrice = (quantity, baremList) => {
    const price = findPrice(quantity, baremList);
    if (price !== null) {
      return quantity * price;
    }
    return null;
  };

  const price = calculateTotalPrice(quantity, data.baremList)?.toFixed(2);

  useEffect(() => {
    setTotalPrice(price);
  }, [quantity]);

  useEffect(() => {
    setDefaultImage(imageSelector[0]);
    // window.location.href(
    //   colorSelector.toLowerCase() +
    //     "-renk" +
    //     sizeSelector.toLowerCase +
    //     "-beden"
    // );
  }, [colorSelector, sizeSelector]);
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <ProductImages
        imageSelector={imageSelector}
        defaultImage={defaultImage}
        setDefaultImage={setDefaultImage}
      />
      <ProductDetails
        data={data}
        colorSelector={colorSelector}
        handleColorChange={handleColorChange}
        sizeSelector={sizeSelector}
        handleSizeChange={handleSizeChange}
        updateSelectedImages={updateSelectedImages}
        quantity={quantity}
        errorMessage={errorMessage}
        handleInputChange={handleInputChange}
        totalPrice={totalPrice}
        minimumQuantity={minimumQuantity}
        productId={productId}
      />
    </div>
  );
};

export default ProductPage;
