// import React from 'react'
import Sidebar from "../Sidebar";
import doods from "../../../assets/Image/doodds.jpeg";
import sara from "../../../assets/Image/sara.jpg";
import uri from "../../../assets/Image/uri.jpg";
import react from '../../../assets/Image/react.png'

function Body() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="bg-gray-800 w-screen h-full ">
          <div className="flex items-center">
            <img className="w-28 h-28 ml-[-60px]" src={react} alt="" />
          <div className="my-28 mx-10 space-y-3 ">
          <p className="text-slate-100 text-xs">
              NOVEMBER 19 ,14:00 (EST){" "}
              <span className="text-red-600">ONLINE</span>
            </p>
            <p className="text-5xl font-extrabold font-mono text-slate-100">
              <span className="text-blue-400">REACT</span> MEETUP
            </p>
            <p className="text-slate-400">
              Join us for react-specific talks every month in the comfort of{" "}
              <br />
              your own home where ever you are in the world!{" "}
            </p>
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <p className="flex items-center justify-center ml-[-20px] uppercase text-slate-200 font-bold">
                Attend now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </div>  
          </div>
          </div>
          <div className="flex gap-5 mx-20 flex-wrap mb-5">
            <div className="w-[200px] h-[220px] bg-gray-900 rounded-lg justify-around flex flex-col items-center">
              <div className="w-[100px] h-[100px]">
                <img className="rounded-full" src={doods} alt="" />
              </div>
              <div className="flex flex-col items-center">
              <p className="text-slate-200 font-bold">Kent C. Dodds</p>
              <p className="text-slate-600 text-sm">Trainer,USA</p>
              </div>
            </div>
            <div className="w-[200px] h-[220px] bg-gray-900 rounded-lg justify-around flex flex-col items-center">
              <div className="w-[100px] h-[100px]">
                <img className="rounded-full" src={sara} alt="" />
              </div>
              <div className="flex flex-col items-center">
              <p className="text-slate-200 font-bold">Sara Vieira</p>
              <p className="text-slate-600 text-sm">Codesandbox, Germany</p>
              </div>
            </div>
            <div className="w-[200px] h-[220px] bg-gray-900 rounded-lg justify-around flex flex-col items-center">
              <div className="w-[100px] h-[100px]">
                <img className="rounded-full" src={uri} alt="" />
              </div>
              <div className="flex flex-col items-center">
              <p className="text-slate-200 font-bold">Uri Goldshetein</p>
              <p className="text-slate-600 text-sm">THe gold, Nertherlands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
