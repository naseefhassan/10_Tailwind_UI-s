// import React from 'react'
import photo from '../../assets/Images/photo.png'

function Body() {
  return (
    <>

    <div className=' ml-44 md:ml-44 sm:flex h-[400px] max-w-[70%] mx-auto sm:mt-10'>
        <div className='w-1/2  space-y-6 '>
            <p className='text-slate-500'>Made with For Tailwindcss develepors</p>
            <p className='text-5xl font-bold'>Stand out <br />from the <br /><span className='text-orange-500'>crowd</span></p>
            <p className='text-slate-500'>Build your MVP with user experience <br />best practices and eye-catching interfaces.</p>
            <div className='flex gap-6'>
                <button className='bg-orange-500 p-4 rounded-full text-sm text-white'>GET STARTED</button>
             <button className='text-orange-500 underline underline-offset-4'>FREE TRAIL</button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src={photo} alt="" className='w-[100%] sm:h-[100%]'/>
        </div>
    </div>
    
    </>
  )
}

export default Body