import Button from "../Button";
import InputArea from "../InputArea";
import { useParams } from "next/navigation";

const DataTable = ({
  tableTitle,
  data,
  variant,
  isInput,
  quantity,
  isTotal,
  errorMessage,
  handleInputChange,
  totalPrice,
  selectedAttributes,
  enabledVariant,
}) => {
  const params = useParams();
  const newUrl = (item) => {
    const urlParams = {
      Renk: params?.size ? `/${item}/${params?.size}` : `/${item}`,
      Beden: params?.color ? `/${params?.color}/${item}` : `/${item}`,
    };
    return urlParams[tableTitle];
  };

  const redirectToUrl = (url) => {
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
              quantity={quantity}
              errorMessage={errorMessage}
              handleInputChange={handleInputChange}
            />
          ) : (
            data?.map((item, index) => {
              return (
                <Button
                  key={index}
                  tableTitle={tableTitle}
                  item={item}
                  url={
                    typeof item === "string" &&
                    newUrl(`${item.toLowerCase()}-${tableTitle?.toLowerCase()}`)
                  }
                  variant={variant}
                  quantity={quantity}
                  isLast={index === data.length - 1}
                  redirectToUrl={redirectToUrl}
                  isSelected={
                    typeof item === "string" &&
                    selectedAttributes.includes(item)
                  }
                  enabledVariant={!enabledVariant?.includes(item)}
                />
              );
            })
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
