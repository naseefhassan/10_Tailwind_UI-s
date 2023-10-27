// import React from 'react'
import Background from '../../assets/Image/bigstring-bacg.jpg'

function Body() {
  return (
    <>
    <div className='flex flex-col items-center mt-7 space-y-3'>
        <p className='text-3xl font-bold text-center'>Let us solve your critical website <br />development challenges</p>
        <p className='text-center text-xs tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt <br /> veniam quam similique, unde excepturi qui ex autem repellat</p>
        <button className="bg-teal-700 p-2 rounded-full text-white">Contact us</button>
        <img src={Background} alt="" />
    </div>
    </>
  )
}

export default Body