// import React from 'react'
import facebook from "../../assets/Images/icons8-facebook-24.png";
import Twitter from "../../assets/Images/icons8-twitter-50.png";
import Docs from "../../assets/Images/icons8-docs-50.png";
import Download from "../../assets/Images/icons8-download-26.png";

function Header() {
  return (
    <>
      <div className="border-b-2 shadow-lg flex justify-around items-center h-12 font-bold flex-wrap">
        <h1>Tailwind Starter kit</h1>
        <div className="flex gap-x-2 sm:gap-4">
          <div className="flex ">
            <img className="w-6 h-6 " src={facebook} alt="" />
            <p>Share</p>
          </div>
          <div className="flex ">
            <img className="w-6 h-6 " src={Twitter} alt="" />
            <p>Tweet</p>
          </div>
          <div className="flex ">
            <img className="w-6 h-6 " src={Docs} alt="" />
            <p>Docs</p>
          </div>
          <div className="flex ">
            <img className="w-4 h-4 " src={Download} alt="" />
            <p>Download</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
