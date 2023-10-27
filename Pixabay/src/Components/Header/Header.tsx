// import React from 'react'
import bg from '../../assets/Image/bg.jpg'

function Header() {
  return (
    <>
      <div
        className="image bg-cover bg-no-repeat  flex flex-col justify-between "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="div1  bg-cover bg-no-repeat text-white flex justify-around items-center mt-5">
          <p className="text-2xl font-naseef">Pixabay</p>
          <div className="flex gap-5 items-center">
            <ul className="flex gap-5">
              <li>Explore</li>
              <li>Log in</li>
            </ul>
            <button className="btn bg-slate-400 p-1 w-20 rounded-lg">
              Join
            </button>
            <button className="btn bg-green-600 p-1 w-20 rounded-lg">
              Upload
            </button>
          </div>
        </div>
        <div className="div2 flex flex-col items-center text-white sm:mt-16 mt-5 ">
          <p>stunning royality-free images & royality-free stock</p>
          <p className="text-xs">
            Over 4.2 million+ high quality stock images, videos and music shared
            by our talented community
          </p>
          <input
            type="text"
            placeholder="search for all images on pixabay."
            className="mt-5 text-black text-sm text-center rounded-full h-9 mb-3 sm:w-96 "
          />
          <label htmlFor="text"></label>
        </div>
      </div>
    </>
  );
}

export default Header;
