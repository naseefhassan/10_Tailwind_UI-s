// import React from 'react'
import photo from '../../assets/Image/photo.jpg'

function Body() {
  return (
    <>
        <div className='edit w-[65%] sm:h-[100px]  mx-auto sm:flex  '>
            <div className='sm:w-1/2'><img className='w-[100%] h-[100%]' src={photo} alt="" /></div>
            <div className='sm:w-1/2 border-2 font-bold'>
                <div className='flex flex-col justify-center items-center border-b-2 font-bold space-y-4'>
                    <p className='text-lg font-serif'> EIFFEL TOWER TURTLENECK DRESS EUR 2 190</p>
                    <p className='text-sm '>Eiffel Tower turtleneck Dress in black strassed velvet knit</p>
                    <p className='text-sm'>rusway</p>
                </div>
                <div className='flex justify-between border-b-2 font-bold'>
                    <div className='space-y-4 p-2'>
                        <p>Cream</p>
                        <p>Size (French Sizing)</p>
                        <ul className='flex gap-2 '>
                            <button className='border-2 w-8 mb-2'>XS</button>
                            <button className='border-2 w-8 mb-2'>S</button>
                            <button className='border-2 w-8 mb-2'>M</button>
                            <button className='border-2 w-8 mb-2'>L</button>
                        </ul>
                    </div>
                    <div className='space-y-4 p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>

                    </div>
                </div>
                <div className='flex border-2 '>
                    <div className='border-r-2 w-1/2 p-2'><p>ADD TO SHOPPING BAG</p></div>
                    <div className='p-2'><p>ADD TO WISHLST</p></div>
                </div>
                <div className='border-b-2 p-2 flex items-center justify-center'><p>Store Availability</p></div>
                <div className='flex justify-between'>
                    <div className='space-y-3 my-3 p-2'>
                        <p>Product Deails</p>
                        <p>Can we help?</p>
                    </div>
                    <div className='p-2 space-y-3 my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>


                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Body