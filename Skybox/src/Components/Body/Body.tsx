// import React from 'react'
import background from "../../assets/Image/background.jpg";
import logo from "../../assets/Image/images (1).png";

function Body() {
  return (
    <>
      <div
        className="w-screen sm:max-w-[1280px] mx-auto bg-red-200 text-white bg-no-repeat bg-cover rounded-xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className=" sm:flex items-center justify-around">
          <div className="flex items-center text-3xl font-bold gap-4">
            <img className="w-12" src={logo} alt="" />
            <p>Skybox</p>
          </div>

          <ul className="flex gap-4 text-sm items-center">
            <li className="underline underline-offset-4">PRODUCT</li>
            <li>SUPPORT</li>
            <li>ROADMAP</li>
            <li>FORUM</li>
            <li className="bg-white text-black rounded-full p-1 ">DOWNLOAD</li>
          </ul>
        </div>
        <div className="sm:flex">
          <div className="w-1/2 space-y-8 flex flex-col p-10">
            <p className="text-5xl font-extrabold">
              Stream <br />
              Like Magic
            </p>
            <p>BEST VR VEDIO PLAYER</p>
            <p className="ml-10">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
              Error voluptas developor eos massive area officia optio id libero,
              <br /> sapiente placeat nulla velit nihil delectus excepturi
              quibusdam{" "}
            </p>
            <div className="flex gap-4">
              <button className="border-2 rounded-full p-3 ">
                GET THE APP
              </button>
              <div className="w-12 h-12 border-2 rounded-full object-cover flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" w-1/2 flex justify-center items-center">
            <img className="w-64" src={logo} alt="" />
          </div>
        </div>

        <div className="sm:flex gap-4 max-w-[1280px]">
          <div className="w-1/2 flex justify-end ">
            <div className="bg-yellow-500 w-[300p] sm:w-96 space-y-10  rounded-xl p-4 text-blue-900">
            <p className="text-2xl  font-bold">Elegant <br />User Experience</p>
            <p className="text-sm">sky box is the most powerfull and best VR player with</p>
            </div>
          </div>
          <div className="space-y-10 p-4 border-2 rounded-xl w-40  sm:w-96">
          <p className="text-2xl font-bold">Immersive <br />3D Eniviorment</p>
          <p className="text-sm">sky box is the most powerfull and best VR player with</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
