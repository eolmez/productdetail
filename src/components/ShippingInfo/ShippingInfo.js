import { BsTruck } from "react-icons/bs";

const ShippingInfo = () => {
  return (
    <div className="flex justify-start items-center ml-3">
      <div className="flex w-28"></div>
      <div className="flex flex-row items-center justify-between relative ml-3 my-0 py-0">
        <BsTruck />
        <p className="flex flex-row text-sm ml-2">
          Kargo Ücreti:
          <span className="text-blue-500 ml-2">Alıcı Öder</span>
        </p>
      </div>
    </div>
  );
};

export default ShippingInfo;
