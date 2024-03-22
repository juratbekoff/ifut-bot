const CustomInput = ({
  placeholder,
  onChange,
}: {
  placeholder?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="border border-purple-500 border-opacity-20 rounded-md px-2 flex gap-2 bg-white shadow-sm focus-within:border-purple-400 w-1/4 max-xl:w-full">
      <div className="flex items-center">
        <img src="/icons/search.svg" className="max-xl:h-5" />
      </div>

      <input
        type="text"
        placeholder={placeholder || "Izlash..."}
        className="border-none outline-none py-2 rounded-md bg-transparent text-sm w-full"
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
