const InputArea = ({ variant, errorMessage, handleInputChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <input
          className={`${variant} ${
            errorMessage && "invalid:border-pink-500 invalid:text-pink-600 "
          }`}
          type="number"
          inputMode="none"
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
