import Image from "next/image";
import Sidebar from "./components/sidebar";
import ChatMenu from "./components/chatMenu";
import ChatBox from "./components/chatBox";
export default function Home() {
  return (
   <>
     <div className="flex flex-row">
        <div className="z-50">
          <Sidebar />
        </div>
        <div className="fixed left-20 w-11/12">
          <ChatMenu />
        </div>
        <div className="fixed right-0 left-96 w-auto">
          <ChatBox />
        </div>
      </div>
   </>
  );
}
