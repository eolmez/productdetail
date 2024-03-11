const InputArea = ({ variant, errorMessage, quantity, handleInputChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <input
          className={`${variant} ${
            errorMessage &&
            "focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          }`}
          type="number"
          inputMode="none"
          value={quantity !== "" ? quantity : ""}
          onChange={handleInputChange}
        />
        <span className="text-xs lg:text-base">Adet</span>
      </div>
      <div>
        <p className="text-green-500 text-xs lg:text-base">Stok adedi: 1000</p>
      </div>
    </div>
  );
};

export default InputArea;
