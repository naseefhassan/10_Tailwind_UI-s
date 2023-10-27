// import React from 'react'
import logo from "../../assets/Image/Thisdot.png";

function Sidebar() {
  return (
    <>
      <div className="h-full bg-slate-900 flex flex-col justify-between ">
        <img src={logo} alt="" />
        <ul className="mx-5 space-y-2 mb-5 text-sm">
          <li className="text-slate-600">Vue Meetup</li>
          <li className="text-slate-600">Angular Meetup</li>
          <li className="text-white">React Meetup</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
