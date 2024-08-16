import GroupNavBtn from "@/components/GroupNavBtn";
import { taskData } from "@/contains";
import { LuCalendarRange } from "react-icons/lu";

import { CgOptions } from "react-icons/cg";
import TaskCard from "@/components/TaskCard";

export default function Home({ params }: { params: { bandId: string } }) {
  const today = new Date().toLocaleDateString().replace(/\//g, "-");

  return (
    <main className="flex pt-2 pb-12 lg:px-6 px-4 h-full max-h-full overflow-hidden">
      <section className="bg-[#FEF8F8] flex-1 flex flex-col md:gap-10 gap-4 md:p-10 sm:p-6 p-3 rounded-2xl">
        <h1 className="font-[Poppins] md:text-[1.6rem] text-[1rem] font-medium">
          {params.bandId}
        </h1>
        <div className="font-[Poppins] flex overflow-hidden flex-col gap- w-full">
          <div className="flex items-center justify-between my-2 gap-4">
            <div className="flex items-center gap-4">
              <GroupNavBtn text="Tasks" isActive={true} />
              <GroupNavBtn text="Members" isActive={false} />
              {/* <GroupNavBtn text="Joined Groups" isActive={false} /> */}
            </div>
            <div className=" hidden md:flex items-center gap-2 p-4 border-2 rounded-xl w-fit">
              <LuCalendarRange className="md:text-4xl text-2xl" />
              {today}
            </div>
          </div>

          <div className="border shadow rounded-lg py-3 md:px-8 px-4 hover:bg-[#ffffffb3] duration-300 bg-white">
            <div
              className="grid md:grid-cols-[auto,1fr,0.4fr,0.4fr,auto] 
            sm:grid-cols-[0.2fr,1fr,auto,auto] grid-cols-[auto,1fr,auto,] items-center md:gap-12 sm:gap-8 gap-4 py-2"
            >
              <h1 className="font-semibold text-left ">No.</h1>
              <h1 className="font-semibold text-start">Name</h1>

              <h1 className="font-semibold text-start hidden sm:inline ">
                Type
              </h1>
              <h1 className="font-semibold hidden md:inline text-start ">
                Status
              </h1>
              <h1 className="font-semibold text-right ">
                <span className=" hidden md:inline">Action</span>
                <CgOptions className=" md:hidden" />
              </h1>
            </div>
          </div>

          <div className="flex flex-col overflow-y-auto  scroll-smooth hide-scrollbar h-full">
            {/* Set the height and enable overflow-y */}
            {taskData.map((project) => (
              <TaskCard
                key={project.no}
                no={project.no}
                name={project.name}
                type={project.type}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
