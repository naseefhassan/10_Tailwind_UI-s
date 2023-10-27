// import React from 'react'
import nothing from '../assets/Image/nthing.png'

function Header() {
  return (
   <>
   <div className='max-w-[1280px] mx-auto flex justify-between items-center'>
    <img src={nothing} alt="" />
    <ul className='flex gap-7'>
        <li>Solutins</li>
        <li>Pricing</li>
        <li>partners</li>
        <li>Company</li>
    </ul>

    <div className='flex gap-4   xl:mr-0'>
        <button>Sign in</button>
        <button className='bg-blue-800 p-2 rounded-xl '>Sign up</button>
    </div>


   </div>
   </>
  )
}

export default Header