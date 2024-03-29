import React from "react";
import Image from "next/image";

const Thumbnails = ({ images, setSelectedImage }) => {
  return (
    <div className="flex justify-center mt-3 gap-2 h-24">
      {images?.map((value, index) => (
        <Image
          key={index}
          src={value}
          alt=""
          className=" rounded-md cursor-pointer border border-1-gray"
          width={"100"}
          height={"100"}
          onClick={() => setSelectedImage(value)}
        />
      ))}
    </div>
  );
};

export default Thumbnails;
