import Button from "../Button";
import InputArea from "../InputArea";
import { useParams } from "next/navigation";

const DataTable = ({
  tableTitle,
  data,
  variant,
  handler,
  isInput,
  quantity,
  colorSelector,
  sizeSelector,
  isTotal,
  errorMessage,
  handleInputChange,
  totalPrice,
  selectedAttributes,
}) => {
  const params = useParams();
  const getUrl = (item) => {
    if (tableTitle === "Renk") {
      return `/${item}/${params?.size}`;
    }
    if (tableTitle === "Beden") {
      return `/${params?.color}/${item}`;
    }
    return `/${item}`;
  };
  const redirectionClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="flex justify-start items-center ml-3">
      <div>
        <p
          className={`flex justify-between text-sm w-28 ${
            isTotal && "font-semibold text-lg"
          }`}
        >
          <span>{tableTitle}</span>
          <span>:</span>
        </p>
      </div>
      <br />
      <div
        className={`flex flex-row ${
          tableTitle === "Adet" ? "justify-between w-full" : "justify-start"
        } items-center p-3`}
      >
        {!isTotal ? (
          isInput ? (
            <InputArea
              variant={variant}
              errorMessage={errorMessage}
              handleInputChange={handleInputChange}
            />
          ) : (
            data?.map((item, index) => (
              <Button
                key={index}
                tableTitle={tableTitle}
                item={item}
                url={
                  typeof item === "string" &&
                  getUrl(`${item.toLowerCase()}-${tableTitle?.toLowerCase()}`)
                }
                variant={variant}
                handler={handler}
                quantity={quantity}
                isLast={index === data.length - 1}
                colorSelector={colorSelector}
                sizeSelector={sizeSelector}
                redirectionClick={redirectionClick}
                isSelected={
                  typeof item === "string" && selectedAttributes.includes(item)
                }
              />
            ))
          )
        ) : (
          <div className="flex flex-col ">
            <p className="text-3xl font-bold ">
              {totalPrice ? totalPrice : "Seçim yapınız."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
