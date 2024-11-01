'use client'
import Sidebar from "../components/sidebar";
import { Provider } from 'react-redux';
import store from '../store/store';
// import "../global.css";

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
