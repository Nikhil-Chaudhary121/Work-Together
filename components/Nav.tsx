import { HiOutlineHome } from "react-icons/hi";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { TbSettings2 } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa6";
import NavButton from "./NavButton";
const Nav = () => {
  return (
    <header className=" hidden lg:flex">
      <div className="h-screen flex flex-col w-fit  lg:py-16 py-10">
        <div className=" h-fit flex lg:px-12 px-6  justify-center items-center gap-2">
          <HiMiniRectangleGroup className="xl:text-[3.1rem]  text-[2.3rem] duration-500 text- cursor-pointer text-[#FF3E41]" />{" "}
          <h1 className="font-dosis duration-500 font-bold cursor-pointer xl:text-3xl lg:text-2xl text-xl text-[#FF3E41]">
            W<span className=" xl:inline hidden ">ork</span>-T
            <span className=" xl:inline hidden ">ogether</span>
          </h1>
        </div>
        <div className="relative">
          <div className="flex flex-col xl:px-8 px-3 py-28 lg:items-start items-center gap-4">
            <NavButton
              btnText={"Home"}
              btnIconActive={
                <HiOutlineHome className=" text-3xl text-[#FF0000]" />
              }
              btnIcon={<HiOutlineHome className=" text-3xl text-[#8B8F9A]" />}
              hrefText={"/"}
            />
            {/* <NavButton
              btnText={"Groups"}
              btnIconActive={
                <HiOutlineUserGroup className=" text-3xl text-[#FF0000]" />
              }
              btnIcon={
                <HiOutlineUserGroup className=" text-3xl text-[#8B8F9A]" />
              }
              hrefText={"/Groups"}
            /> */}
            <NavButton
              btnText={"Invites"}
              btnIconActive={
                <FaHandshake className=" text-3xl text-[#FF0000]" />
              }
              btnIcon={<FaHandshake className=" text-3xl text-[#8B8F9A]" />}
              hrefText={"/invites"}
            />
            <NavButton
              btnText={"Calender"}
              btnIconActive={
                <SlCalender className=" text-3xl text-[#FF0000]" />
              }
              btnIcon={<SlCalender className=" text-3xl text-[#8B8F9A]" />}
              hrefText={"/calender"}
            />
            <NavButton
              btnText={"Profile"}
              btnIconActive={<CgProfile className=" text-3xl text-[#FF0000]" />}
              btnIcon={<CgProfile className=" text-3xl text-[#8B8F9A]" />}
              hrefText={"/profile"}
            />
            <NavButton
              btnText={"Settings"}
              btnIconActive={
                <TbSettings2 className=" text-3xl text-[#FF0000]" />
              }
              btnIcon={<TbSettings2 className=" text-3xl text-[#8B8F9A]" />}
              hrefText={"/settings"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
