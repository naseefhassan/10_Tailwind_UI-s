// import React from 'react'
import logo from '../../assets/Image/buznex-logo (1).png'
import photo from '../../assets/Image/chill.png'

function Header() {
  return (
    <>
    <div className='bg-green-100'>
         
    <div className='flex sm:flex-row flex-col items-center justify-center sm:justify-between '>
            <img src={logo} alt="" />
            <ul className='sm:flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        
        </div>
        <div className='flex sm:flex-row flex-col items-center mx-auto my-20'>
            <div className='w-1/2 flex flex-col items-center space-y-5' >
                <p className='text-5xl font-bold'>Our Services</p>
                <p>Pleasure rationally encounter consequences <br />are extremely painful great oppurtunity</p>
            </div>
            <div className='w-1/2 mt-10'><img src={photo} alt="" /></div>
        </div>
    </div>
    
    </>
  )
}

export default Header