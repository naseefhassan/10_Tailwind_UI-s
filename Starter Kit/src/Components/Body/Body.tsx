// import React from 'react'
import Design from '../../assets/Images/design.png'

function Body() {
  return (
    <>
    <div className=' max-w-[80%] mx-auto grid sm:grid-cols-2 justify-center'>
    <div className='w-1/2  space-y-5 '>
        <p className='font-bold text-2xl'>A beautiful extension for <br /> TailwindCSS.</p>
        <p className='capitalize'>Tailwind starter kit i free and open source.it does not change or <br />and any CSS to the already one from TAILWIND . it features <br />multiple HTML elements and it comes with dynamic components <br />for reacctJS, we and angular</p>
        <div className=' flex gap-4'>
            <button className='bg-rose-500'>GET STARTED</button>
            <button className='bg-gray-700'>OTHER STAR</button>
        </div>
    </div>
    <div><img className=' absolute w-[400px] h-80 right-0' src={Design} alt="" /></div>

    </div>
    </>
  )
}

export default Body