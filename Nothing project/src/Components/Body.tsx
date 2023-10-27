// import React from 'react'
import backgimg from '../assets/Image/computer.jpg'

function Body() {
  return (
    <>
    <div className='sm:min-w-[1280px] w-[490px] h-96 mx-auto flex flex-col justify-center items-center rounded-lg ' style={{backgroundImage:`url(${backgimg})`}}>
        <div className='flex flex-col items-center space-y-2'>
            <p className='text-white font-bold text-3xl sm:text-7xl'>Take control of your</p>
            <p className='text-slate-300 font-bold text-3xl sm:text-7xl'>customer support</p>
            <p className='text-slate-400'>Anim aute id magna aliqua ad ad non desernut sunt.Qui irure qui lorem cupidatat</p>
            <p className='text-slate-400'>commodo.Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className='flex gap-4'>
                <button className='bg-white text-slate-500 p-2 rounded-lg'>Get started</button>
                <button className='bg-blue-600 text-white p-2 rounded-lg'>Live demo</button>
            </div>

            <div></div>
        </div>
    </div>
    </>
  )
}

export default Body