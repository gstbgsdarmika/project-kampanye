const InputField = ({placeholder, reference, type}) => {
  return (
    <div className="bg-white rounded-[24px] h-[66px] shadow-md px-6 py-2 mb-[21px]">
      <input
        ref={reference}
        type={type? type:"text"}
        className="w-full text-gray-700 py-3 bg-transparent border-none outline-none placeholder-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
