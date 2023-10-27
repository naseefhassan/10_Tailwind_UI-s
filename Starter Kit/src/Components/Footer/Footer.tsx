// import React from 'react'
import computer from '../../assets/Images/lee-campbell-DtDlVpy-vvQ-unsplash-scaled.jpg'

function Footer() {
  return (
   <>
  <div className='bg-none sm:bg-gray-300 h-[300px] mt-[450px] md:mt-[40px] xl:mt-[50px] 2xl:mt-24 grid sm:flex '>
 
    <div className='sm:w-1/2  sm:h-72 flex justify-center mt-[-20px] w-screen h-80' >
    <div className='w-96 sm:w-56  bg-pink-500 space-y-2 space-x-2'>
    <img src={computer} alt="" />
    <p className='font-bold text-white text-sm'>great for your awesome project</p>
    <p className='text-white leading-4 text-xs'>Lorem ipsum dolor sit amet consect adipisicing elit. Veniam magnam tee dolores quis obcaecati facere tempt dolores quis obcaecati facere .</p>
    </div>
    </div>

    <div className='sm:w-1/2 grid grid-cols-2 grid-rows-2 justify-center items-center p-8 md:text-sm text-xs bg-gray-300  gap-6 w-full'>
        <div className=' text-gray-600 '><p className='font-bold text-black'>Css Components</p><p>Lorem ipsum  illum, et impedit <br /> adipisci blanditiis praesentium minima, it</p></div>
        <div className=' text-gray-600 '><p className='font-bold text-black'>pages</p><p>Lorem ipsum  illum, et impedit <br /> adipisci blanditiis praesentium minima, it</p></div>
        <div className=' text-gray-600 '><p className='font-bold text-black'>Javascript components</p><p>Lorem ipsum  illum, et impedit <br /> adipisci blanditiis praesentium minima, it</p></div>
        <div className=' text-gray-600 '><p className='font-bold text-black'>documentation</p><p>Lorem ipsum  illum, et impedit <br /> adipisci blanditiis praesentium minima, it</p></div>

    </div>
  </div>
   </>
  )
}

export default Footer