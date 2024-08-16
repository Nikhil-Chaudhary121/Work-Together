"use client";
interface Project {
  no: string;
  name: string;
  pic: string;
  owner: string;
  totalTasks: string;
  totalMembers: number; // Add totalMembers field
}
import { useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
const GroupDataCard = ({
  no,
  name,
  pic,
  owner,
  totalTasks,
  totalMembers,
}: Project) => {
  const router = useRouter();
  const handleClick = (bandId: string) => {
    router.push(`/band/${bandId}`);
  };
  return (
    <div
      onClick={() => {
        handleClick(name);
      }}
      className="border cursor-pointer shadow hover:bg-[#faf6f6b3] duration-300 bg-white rounded-lg py-2 px-8"
    >
      <div
        className="grid md:grid-cols-[0.4fr,1fr,0.7fr,0.2fr,0.2fr,0.1fr] 
            sm:grid-cols-[0.2fr,1fr,auto,auto,auto] grid-cols-[1fr,auto,auto,auto] items-center sm:gap-8 gap-4 py-2"
      >
        <div className="text-left sm:inline  hidden md:text-md text-sm ">
          {no}
        </div>{" "}
        <div className="flex items-center gap-4">
          <img
            src={pic}
            alt={`${name} profile`}
            className="md:w-12 md:h-12 w-10 h-10 rounded-full object-cover"
          />
          <div className="text-start md:text-md text-sm font-medium">
            {name}
          </div>
        </div>
        <div className="text-start font-medium md:inline md:text-md text-sm hidden ">
          {owner}
        </div>
        <div className="text-start md:text-md text-sm">{totalTasks}</div>
        <div className="text-center md:text-md text-sm ">
          {totalMembers}
        </div>{" "}
        {/* Add padding-right */}
        <div className="text-right">
          <BsThreeDotsVertical className=" md:text-xl text-md  cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default GroupDataCard;
