import ChatMenu from "./components/ChatMenu";
import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
  const chat = useSelector((state: any) => state.chat.value);
  console.log('a', chat)
  return (
    <>
      <div className="z-50 fixed ">
        <Sidebar />
      </div>
      <div className={`fixed left-10   z-50  sm:block sm:pr-3 ${chat == '' || chat == '#' ? '' : 'hidden'}`}>
        <ChatMenu />
      </div>
      <div className={`sm:fixed sm:right-0 ${chat && chat != '#' ? '' : 'hidden'} sm:w-auto sm:left-80  sm:block `}>
        <ChatBox />
      </div>
    </>
  )
}