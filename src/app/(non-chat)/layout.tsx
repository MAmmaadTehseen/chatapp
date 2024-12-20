'use client'
import Sidebar from "../components/Sidebar";
import { Provider } from 'react-redux';
import store from '../store/store';
// import "../../app/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <Provider store={store} >

      <div className="z-50 fixed">
        <Sidebar />
      </div>
      {children}
    </Provider>

  );
}
