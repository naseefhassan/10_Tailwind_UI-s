// import React from 'react'
import base from '../assets/Image/base.png'

function Footer() {
  return (
   <>
   <div className='flex flex-col w-[500px] sm:min-w-[1280px] 2xl:mx-auto items-center justify-center mt-10 space-y-5'>
    <p className='uppercase'>trusted by over 5 very average small business</p>
    <img src={base} alt="" />
   </div>
   </>
  )
}

export default Footer
