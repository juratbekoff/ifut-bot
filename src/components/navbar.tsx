/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Link } from "react-router-dom";
import Input from "./ui-custom/input";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 max-xl:flex-col max-xl:gap-5 max-xl:mt-7">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img src="/icons/logo.svg" className="h-10 max-md:h-8" alt="Logo" />
        </Link>
      </div>

      <div className="max-xl:hidden flex justify-end w-full">
        <Input />
      </div>
    </div>
  );
};

export default Navbar;
