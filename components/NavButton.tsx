"use client";
import { useEffect, useState } from "react";

const NavButton = ({
  btnText,
  btnIcon,
  btnIconActive,
  hrefText,
}: {
  btnText: string;
  btnIcon: React.ReactNode;
  btnIconActive: React.ReactNode;
  hrefText: string;
}) => {
  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    // This will run after the component mounts, so it's safe to use window.location
    setPathname(window.location.pathname);
  }, []);

  let isActive = pathname === hrefText;
  const handleClick = async () => {
    isActive = true;
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:bg-[#FFEBEC]  ${
        isActive ? "text-[#FF0000] bg-[#FFEBEC]" : "text-[#8B8F9A]"
      }  cursor-pointer rounded-xl lg:pl-10 lg:px-0 px-3 lg:w-full w-fit duration-300`}
    >
      <a
        href={hrefText}
        className="flex lg:gap-4 items-center w-fit lg:px-1 py-3 text-xl"
      >
        {isActive ? btnIconActive : btnIcon}
        <span
          className={` lg:inline hidden text-[1.3rem] font-[Sometype Mono] font-[400]
             $isActive ? "text-[#FF0000]" : "text-[#8B8F9A]"
             `}
        >
          {btnText}
        </span>
      </a>
    </button>
  );
};

export default NavButton;
