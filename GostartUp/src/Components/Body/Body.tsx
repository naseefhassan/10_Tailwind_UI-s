// import React from 'react'
import Team from '../../assets/Image/team.jpg'
import man from '../../assets/Image/man.jpg'

function Body() {
  return (
    <>
    <div className=' sm:flex  items-center ml-[30%] sm:ml-0 sm:p-20 mt-4 grid  '>
        <div className='w-1/2 space-y-6 flex flex-col items-center sm:mr-10'>
            <button className='bg-slate-800 rounded-full text-sm p-3 '>Tailwind Template for Startups</button>
            <p className='font-bold text-3xl sm:text-5xl'>Digital Solutions for <br />Your <span className='underline decoration-2'>Business</span></p>
            <p className='text-slate-400'>Handcrafted Tailwind CSS template for your next-startup,business,<br />Agency or SaaS website.Comes with refreshing design and <br />eveything you needed to kickstart your next web project.</p>
            <div className='flex gap-4 '>
                <button className='bg-blue-700 p-2 rounded-lg'>Get Started</button>
                <button>How it work</button>
            </div>
        </div>
        <div className='w-1/2  space-y-[-230px] sm:space-x-[-40px] mt-40 sm:mt-0'>
            <img className='mt-4' src={Team} alt="" />
            <img className='sm:w-[400px]  ' src={man} alt="" />

        </div>
    </div>
    </>
  )
}

export default Body