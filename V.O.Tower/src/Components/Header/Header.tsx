import React from 'react'

function Header() {
  return (
    <>
    <div className='font-medium flex flex-wrap  justify-around items-center'>
      <div className='flex items-center gap-10'>
        <p className='text-6xl font-medium'>V.O.</p>
        <p>SEARCH</p>
      </div>
      <ul className='flex gap-4 '>
        <li>MENU</li>
        <li>MY ACCOUNT</li>
        <li>SHOPPING BAG</li>
        <li>WISH LIST</li>
        <li>EN</li>
      </ul>
    </div>
    <div className='border-b-2 border-t-2 mt-10 italic font-bold font-mono ml-2 text-slate-500'>
      <p className='text-center'>EIFFEL TOWER TURTLENECK DRESS</p>
    </div>
    </>
  )
}

export default Header
