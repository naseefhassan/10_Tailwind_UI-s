// import React from 'react'
import bigstring from '../../assets/Image/Bigstring.jpg'

function Header() {
  return (
   <>
   <div className='sm:flex sm:justify-around grid justify-center items-center'>
    <img className='mx-auto sm:mx-0' src={bigstring} alt="" />
    <ul className='flex gap-5'>
        <li className='text-teal-700'>Home</li>
        <li>Blog</li>
        <li>Picking</li>
        <li>Contact</li>
        <li>FAQ</li>
    </ul>
    <button className='bg-teal-700 text-white rounded-full p-2'>Get Started</button>
   </div>
   </>
  )
}

export default Header