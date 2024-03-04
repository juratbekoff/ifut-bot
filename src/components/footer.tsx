import { LuHome } from "react-icons/lu";
import { HiOutlineCreditCard } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-evenly text-xs">
      <Link
        to={"/"}
        className={`flex flex-col items-center ${
          pathname === "/" && "font-semibold text-purple-600 "
        }`}
      >
        <LuHome
          className={`text-[20px] ${
            pathname === "/" ? "text-purple-600" : "text-[#666666]"
          }`}
        />
        <span>Asosiy</span>
      </Link>

      <Link
        to={"/payment"}
        className={`flex flex-col items-center ${
          pathname === "/payment" && "font-semibold text-purple-600 "
        }`}
      >
        <HiOutlineCreditCard
          className={`text-[21px] ${
            pathname === "/payment" ? "text-purple-600" : "text-[#666666]"
          }`}
        />
        <span>To'lov</span>
      </Link>
    </div>
  );
};

export default Footer;
