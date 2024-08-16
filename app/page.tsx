import GroupDataCard from "@/components/GroupDataCard";
import GroupNavBtn from "@/components/GroupNavBtn";
import { groupData } from "@/contains";
import { LuCalendarRange } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { CgOptions } from "react-icons/cg";

export default function Home() {
  const today = new Date().toLocaleDateString().replace(/\//g, "-");

  return (
    <main className="flex pt-2 pb-12 lg:px-6 px-4 h-full max-h-full overflow-hidden">
      <section className="bg-[#FEF8F8] flex-1 flex flex-col md:gap-10 gap-4 md:p-10 sm:p-6 p-3 rounded-2xl">
        <h1 className="font-[Poppins] text-[1.6rem] font-medium">All Groups</h1>
        <div className="font-[Poppins] flex overflow-hidden flex-col gap-2 w-full">
          <div className="flex items-center justify-between my-2 gap-4">
            <div className="flex items-center gap-4">
              <GroupNavBtn text="Total Groups" isActive={true} />
              <GroupNavBtn text="Your Groups" isActive={false} />
              <GroupNavBtn text="Joined Groups" isActive={false} />
            </div>
            <div className=" hidden md:flex items-center gap-2 p-4 border-2 rounded-xl w-fit">
              <LuCalendarRange className="md:text-4xl text-2xl" />
              {today}
            </div>
          </div>

          <div className="border shadow rounded-lg py-3 px-8 hover:bg-[#ffffffb3] duration-300 bg-white">
            <div
              className="grid md:grid-cols-[0.4fr,1fr,0.7fr,0.2fr,0.2fr,0.1fr] 
            sm:grid-cols-[0.2fr,1fr,auto,auto,auto]
            grid-cols-[1fr,auto,auto,auto] sm:gap-8 gap-4 items-center  py-2"
            >
              <h1 className="font-semibold text-left sm:inline hidden">No.</h1>
              <h1 className="font-semibold text-start">Name</h1>
              <h1 className="font-semibold text-start md:inline hidden">
                Owner
              </h1>

              <h1 className="font-semibold text-start ">
                <span className=" hidden md:inline">Tasks</span>
                <MdPendingActions className=" md:hidden" />
              </h1>
              <h1 className="font-semibold text-start ">
                <span className=" hidden md:inline">Members</span>
                <FaUsers className=" md:hidden" />
              </h1>
              <h1 className="font-semibold text-right ">
                <span className=" hidden md:inline">Action</span>
                <CgOptions className=" md:hidden" />
              </h1>
            </div>
          </div>

          <div className="flex flex-col overflow-y-auto gap-1 scroll-smooth hide-scrollbar h-full">
            {/* Set the height and enable overflow-y */}
            {groupData.map((project) => (
              <GroupDataCard
                key={project.no}
                no={project.no}
                name={project.name}
                pic={project.pic}
                owner={project.owner}
                totalTasks={project.totalTasks}
                totalMembers={project.totalMembers}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
