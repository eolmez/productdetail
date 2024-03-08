import Table from "../Table";
import Title from "../Title";
import Comments from "../Comments";
import Price from "../Price";
import AddBasket from "../AddBasket";
import { BsTruck } from "react-icons/bs";

const ProductDetails = ({
  data,
  handleColorChange,
  handleSizeChange,
  colorSelector,
  sizeSelector,
  quantity,
  errorMessage,
  handleInputChange,
  minimumQuantity,
  totalPrice,
  productId,
}) => {
  const variantMap = {
    tableButton:
      "flex justify-center items-center border-2 border-gray px-2 mx-1 w-20 lg:w-28 h-12 rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none ",
    quantityButton:
      "flex justify-center items-center text-xs lg:text-sm border-r-2 border-gray-200 px-2 mx-1 w-20 lg:w-28 h-12 rounded",
    inputButton:
      "flex justify-center items-center rounded-md border-none outline-none px-2 mx-1 w-20 lg:w-28 h-12 rounded focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500",
    basketButton:
      "bg-yellow-500 text-white font-semibold text-xl px-12 rounded h-16 w-52 ml-6",
  };

  const colorValues =
    data.selectableAttributes.find((attribute) => attribute.name === "Renk")
      ?.values || [];

  const sizeValues =
    data.selectableAttributes.find((attribute) => attribute.name === "Beden")
      ?.values || [];

  return (
    <div className="flex flex-col">
      <Title titleText={data.productTitle} />
      <Comments />
      <Price minimumQuantity={minimumQuantity} />
      <Table
        tableTitle={"Renk"}
        data={colorValues}
        variant={variantMap.tableButton}
        handler={handleColorChange}
        sizeSelector={sizeSelector}
      />
      <Table
        tableTitle={"Beden"}
        data={sizeValues}
        variant={variantMap.tableButton}
        handler={handleSizeChange}
        colorSelector={colorSelector}
      />
      <div className="flex flex-col justify-center bg-gray-100 md:w-[495px]">
        <Table
          tableTitle={"Toptan Fiyat"}
          data={data.baremList}
          variant={variantMap.quantityButton}
          quantity={quantity}
        />
        <Table
          tableTitle={"Adet"}
          variant={variantMap.inputButton}
          isInput={true}
          errorMessage={errorMessage}
          handleInputChange={handleInputChange}
        />
        <div className="flex justify-start items-center ml-3">
          <div className="flex w-28"></div>
          <div className="flex flex-row items-center relative ml-3 my-0 py-0">
            <div className="text-red-500 font-semibold text-xs relative min-w-24 min-h-5 ">
              {errorMessage}
            </div>
          </div>
        </div>
      </div>
      <Table tableTitle={"Toplam"} isTotal={true} totalPrice={totalPrice} />
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

      <AddBasket variant={variantMap.basketButton} productId={productId} />
    </div>
  );
};

export default ProductDetails;
