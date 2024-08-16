import BottomNav from "@/components/BottomNav";
import "./globals.css";
import Nav from "@/components/Nav";
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "Work Together",
  description: "A platform for work together",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden font-[Roboto] bg-bg-img-1 bg-cover bg- hide-scrollbar w-screen h-fit min-h-screen">
        <main className=" relative flex bg-[#ffffff] backdrop:blur-[20px] w-full min-h-screen">
          <Nav />
          <BottomNav />
          <div className="flex-1 flex flex-col min-h-screen  max-h-screen overflow-hidden  ">
            <TopNav />
            <div className=" flex-1 overflow-hidden ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
