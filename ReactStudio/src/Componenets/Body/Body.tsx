// import React from 'react'
import image from '../../assets/Image/react.png'

function Body() {
  return (
    <>
    <div className='sm:flex h-1/2 bg-zinc-900 text-white justify-center items-center p-10 '>
        <div className='w-1/2 space-y-5 mx-auto'>
            <p className='text-3xl font-bold text-white  '>React Native <span className='text-green-700'>Mobile App</span> <br />Development</p>
            <p className='text-sm'>We're based in the city of landon where we share our exprience for cross <br />plafrom mobile appp development</p>
            <ul className='flex gap-3 text-sm'>
                <button className='bg-green-400p-2 '>GET TOUCH</button>
                <button>OUR SERVICES</button>
            </ul>
        </div>
        <div className='w-1/2 flex mx-auto mt-5 sm:mt-0 justify-center items-center'>
            <img className='w-44' src={image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Body