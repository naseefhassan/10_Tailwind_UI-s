// import React from 'react'
import wiggle from '../../assets/Images/wiggle-logo.png'


function Header() {
  return (
    <>
    <div className='sm:flex justify-around  items-center h-28'>
        <img src={wiggle} alt="" />
        <div>
            <ul className='flex gap-8'>
                <li className='text-orange-500'>Home</li>
                <li>Insurances</li>
                <li>Claims</li>
                <li>Testimoniais</li>
                <li>FAQ's</li>
                <li>pricing</li>
            </ul>
        </div>
    </div>
    </>
    )
}

export default Header