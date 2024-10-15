import Image from "next/image";
import Sidebar from "./components/sidebar";
import ChatMenu from "./components/chatMenu";
import ChatBox from "./components/chatBox";
export default function Home() {
  console.log("23")
  return (
   <>
     <div className="flex flex-row">
        <div className="z-50 ">
          <Sidebar />
        </div>
        <div className="sm:fixed sm:left-20  sm:w-auto  sm:block   fixed left-20  w-5/6 ">
          <ChatMenu />
        </div>
        <div className="sm:fixed sm:right-0 sm:left-96 sm:w-auto hidden sm:block ">
          <ChatBox />
        </div>
      </div>
   </>
  );
}
