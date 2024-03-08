import Image from "next/image";
import Thumbnails from "../Thumnails";

const ProductImages = ({ imageSelector, defaultImage, setDefaultImage }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Image
          src={defaultImage}
          alt=""
          className="aspect-square object-cover rounded-xl"
          width={"400"}
          height={"500"}
          priority={true}
        />
      </div>
      <Thumbnails
        imageSelector={imageSelector}
        setDefaultImage={setDefaultImage}
      />
    </div>
  );
};

export default ProductImages;
