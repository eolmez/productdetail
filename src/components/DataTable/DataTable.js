import Button from "../Button";
import InputArea from "../InputArea";
import { usePathname, useParams } from "next/navigation";

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
}) => {
  const pathName = usePathname();
  const params = useParams();
  const getUrl = (item) => {
    // if (params.color) {
    //   return `/${params.color}/${item}`;
    // }
    if (tableTitle === "Renk") {
      return `/${item}/${params?.size}`;
    }
    if (tableTitle === "Beden") {
      return `/${params?.color}/${item}`;
    }
    return `/${item}`;
  };
  const handleClick = (url) => {
    // setSelectedValue(x);
    // console.log("buraya tıkladın", );
    window.location.href = url;
  };
  return (
    <div className="flex justify-start items-center ml-3">
      <div className="">
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
                handleClick={handleClick}
                isSelected={
                  typeof item === "string" &&
                  (params?.color.toLowerCase().indexOf(item.toLowerCase()) >
                    -1 ||
                    params?.size.toLowerCase().indexOf(item.toLowerCase()) > -1)
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
