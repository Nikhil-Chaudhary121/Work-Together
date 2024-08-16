"use client";
interface taskInterface {
  no: string;
  name: string;
  type: "Backend" | "Frontend" | "Other";
  status: "todo" | "progress" | "approval" | "done";
}
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "./Modal";
const TaskCard = ({ no, name, type, status }: taskInterface) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const router = useRouter();
  const handleClick = (bandId: string) => {
    // router.push(`/band/${bandId}`);
  };
  return (
    <>
      <Modal
        name="Landing Page Redesign"
        description="Our old landing page is a little bit boring and we want something unique"
        type="Frontend"
        status="todo"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <div
        onClick={openModal}
        className="border cursor-pointer shadow hover:bg-[#faf6f6b3] duration-300 bg-white rounded-lg py-2 md:px-8 px-4"
      >
        <div
          className="grid md:grid-cols-[auto,1fr,0.4fr,0.4fr,auto] 
            sm:grid-cols-[0.2fr,1fr,auto,auto] grid-cols-[auto,1fr,auto,] items-center md:gap-12 sm:gap-8 gap-4 py-2"
        >
          <h1 className="text-left  md:text-md text-sm ">{no}</h1>
          <h1 className="text-start md:text-md text-sm font-medium">{name}</h1>
          <h1 className="text-start sm:flex hidden md:text-md text-sm ">
            {type}
          </h1>
          <h1 className="text-start font-medium md:inline md:text-md text-sm hidden ">
            {status}
          </h1>
          {/* <div className="text-start md:text-md text-sm">{totalTasks}</div> */}
          {/* Add padding-right */}
          <div className="flex justify-end text-right">
            <BsThreeDotsVertical className=" md:text-xl text-md  cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
