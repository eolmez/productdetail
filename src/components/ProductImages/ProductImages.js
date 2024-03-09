"use client";
import Image from "next/image";
import Thumbnails from "../Thumbnails";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Image
          src={selectedImage}
          alt=""
          className="aspect-square object-cover rounded-xl"
          width={"400"}
          height={"500"}
          priority={true}
        />
      </div>
      <Thumbnails images={images} setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default ProductImages;
