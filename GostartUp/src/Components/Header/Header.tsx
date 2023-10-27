// import React from 'react'
import startup from '../../assets/Image/GoStartup.png'

function Header() {
  return (
    <>
    <div className='flex items-center sm:justify-between justify-center space-y-2 flex-wrap'>
        <div className='flex items-center ml-4 gap-2'>
            <img className='rounded-2xl' src={startup} alt="" />
            <p className='text-3xl font-extrabold'>GoStartup</p>
        </div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>Features</li>
            <li>Pages</li>
            <li>Support</li>
        </ul>
        <div className='flex mr-4 gap-5 items-center'>
            <button className='bg-blue-700 p-2 rounded-lg'>Sign In</button>
            <button className='bg-slate-600 p-2 rounded-lg'>Sign Up</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

        </div>
    </div>
    </>
  )
}

export default Header