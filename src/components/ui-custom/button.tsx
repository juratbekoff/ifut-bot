import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";

const Button = ({
  isLoading = false,
  onClick,
  children,
}: {
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="flex gap-1 justify-center items-center p-1 max-xl:text-sm text-base bg-white border border-purple-500  text-purple-500 font-semibold rounded-xl w-1/4 max-xl:w-1/2 disabled:opacity-60"
      onClick={onClick}
      disabled={isLoading}
    >
      <ReloadIcon
        className={`self-center animate-spin mt-[3px] max-xl:mt-[2px] ${
          !isLoading && "hidden"
        }`}
      />
      <span>{children}</span>
    </button>
  );
};

export default Button;
