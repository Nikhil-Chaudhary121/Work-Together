import { TbSettings2 } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";

import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa6";

const BottomNav = () => {
  return (
    <div className="lg:hidden  shadow-xl bg-white  rounded-xl sm:px-8 px-5 py-4 fixed z-10 sm:bottom-5 bottom-4 left-[50%] -translate-x-1/2 text-4xl ">
      <ul className="flex items-center sm:gap-8 gap-6">
        <li className="">
          <a
            href="#"
            className="  flex items-center gap-2   px-1 py-1 hover:text-[#FE484C]  duration-500 text-[#ff9193] text-xl"
          >
            <HiOutlineHome className=" text-2xl hover:scale-110 duration-300 " />
          </a>
        </li>

        {/* <li className="">
          <a
            href="#"
            className="  flex items-center gap-2   px-1 py-1 hover:text-[#FE484C]  duration-500 text-[#ff9193] text-xl"
          >
            <HiOutlineUserGroup className="  text-2xl hover:scale-110 duration-300" />
          </a>
        </li> */}
        <li className="">
          <a
            href="#"
            className="  flex items-center gap-2   px-1 py-1 hover:text-[#FE484C]  duration-500 text-[#ff9193] text-xl"
          >
            <FaHandshake className="  text-2xl hover:scale-110 duration-300" />
          </a>
        </li>

        <li className="">
          <a
            href="#"
            className=" duration-300 text-[#ff9193] hover:text-[#FE484C]"
          >
            <LuPlus className="text-2xl hover:scale-110 duration-300" />
          </a>
        </li>

        <li className="">
          <a
            href="#"
            className=" duration-300 text-[#ff9193] hover:text-[#FE484C]"
          >
            <CgProfile className="text-2xl hover:scale-110 duration-300" />
          </a>
        </li>
        {/* <li className="">
          <a
            href="#"
            className=" duration-300 text-[#ff9193] hover:text-[#FE484C]"
          >
            <SlCalender className="text-2xl hover:scale-110 duration-300" />
          </a>
        </li> */}

        <li className="">
          <a
            href="#"
            className="text-[#ff9193] hover:text-[#FE484C]  duration-500"
          >
            <TbSettings2 className=" text-2xl hover:scale-110 duration-300 " />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
