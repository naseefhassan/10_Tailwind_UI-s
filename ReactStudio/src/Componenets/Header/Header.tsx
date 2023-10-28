// import React from 'react'
import img from '../../assets/Image/react.png'

function Header() {
  return (
    <>
        <div>
            <div className=" flex justify-around bg-zinc-700 text-slate-300 text-sm items-center">   
                  <p className="uppercase">welcome to React studio</p>
                <p className="flex items-center"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-700">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Landon, UK
                </p>
            </div>
            <div className="bg-zinc-800 sm:flex justify-around text-slate-300">
              <div className='flex items-center gap-3'>
                <img className='w-10' src={img} alt="" />
              <p className="text-green-700">react studio</p>
              </div>
              <ul className="flex gap-3 text-xs items-center">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>ABOUT US</li>
                <li>OUR WORK</li>
                <li>BLOG</li>
                <li>CONTACT US</li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Header