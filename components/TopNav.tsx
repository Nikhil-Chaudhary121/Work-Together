import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
const TopNav = () => {
  return (
    <div className="flex w-full justify-between items-center pr-8 pl-4 py-6 ">
      <div className="lg:hidden h-fit flex lg:px-12 px-4  justify-center items-center gap-2">
        <HiMiniRectangleGroup className="xl:text-[3.1rem]  text-[2.3rem] duration-500 text- cursor-pointer text-[#FF3E41]" />{" "}
        <h1 className="font-dosis duration-500 font-bold cursor-pointer xl:text-3xl lg:text-2xl text-xl text-[#FF3E41]">
          W<span className=" xl:inline hidden ">ork</span>-T
          <span className=" xl:inline hidden ">ogether</span>
        </h1>
      </div>
      <div className="relative hidden md:inline-block ">
        <IoIosSearch className="  absolute top-1/2 -translate-y-1/2 left-6" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className=" xl:px-16 px-12  border-2 rounded-xl py-3"
        />
      </div>
      <div className=" flex  items-center md:gap-8 gap-4">
        <div className="lg:inline hidden p-2 rounded-xl text-[#f87073] duration-300 hover:text-[#FE484C] hover:bg-[#ff919368]">
          <IoAddOutline className="md:text-3xl  cursor-pointer hover:scale-[1.2] duration-300" />
        </div>
        <IoNotificationsOffOutline className="md:text-2xl text-xl cursor-pointer hover:scale-[1.2] duration-300" />
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1723239405988-1ec310c69291?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" lg:w-12 lg:h-12 w-10 h-10 rounded-xl"
            alt=""
          />
          <div className=" hidden md:flex items-center gap-3">
            <h1 className=" lg:text-xl md:text-lg text-md font-medium ">
              Emeli Fernandes{" "}
            </h1>
            <IoMdArrowDropdown className=" text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
