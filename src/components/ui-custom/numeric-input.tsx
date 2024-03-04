import { FaMinus, FaPlus } from "react-icons/fa6";

const NumericInput = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) => {
  const onIncrement = () => {
    if (value >= 30) return null;
    setValue(value + 1);
  };

  const onDecrement = () => {
    if (value <= 0) return null;
    setValue(value - 1);
  };

  return (
    <div className="flex  rounded-lg">
      <div
        className="bg-purple-500 text-white p-2 flex flex-row justify-center items-center rounded-l-lg active:bg-red-500"
        onClick={onDecrement}
      >
        <FaMinus className="text-sm" />
      </div>

      <div className="flex justify-center items-center border-t border-b min-w-6 px-1">
        <span className="font-semibold">{value}</span>
      </div>

      <div
        className="bg-purple-500 text-white p-2 flex flex-row justify-center items-center rounded-r-lg active:bg-green-500"
        onClick={onIncrement}
      >
        <FaPlus className="text-sm" />
      </div>
    </div>
  );
};

export default NumericInput;
