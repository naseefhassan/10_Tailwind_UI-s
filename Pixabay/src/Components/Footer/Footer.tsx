// import React from 'react'
import forest from '../../assets/Image/earth-day-and-world-environment-day-spring-tropical-tree-leaves-and-branch-with-beautiful-green-forest-background-generate-ai-free-photo.jpg'
import chinesee from '../../assets/Image/portrait-asian-beautiful-woman-wearing-cheongsam-smiling-holding-red-envelopes-fan-pose-shrine-chinese-new-year_1150-53880.avif'
import Butterfly from '../../assets/Image/butterfly.jpeg'
import cartoon from '../../assets/Image/cartoon.jpeg'

function Footer() {
  return (
    <>
     <div className="flex justify-around items-center flex-wrap mt-5 ml-[3%] space-y-5 space-x-5">
        <div className="w-64 h-64 bg-cover bg-no-repeat rounded-xl mt-5" style={{backgroundImage:`url(${forest})`}}></div>
        <div className="w-64 h-64 bg-cover bg-no-repeat rounded-xl" style={{backgroundImage:`url(${chinesee})`}}></div>
        <div className="w-64 h-64 bg-cover bg-no-repeat rounded-xl" style={{backgroundImage:`url(${Butterfly})`}}></div>
        <div className="w-64 h-64 bg-cover bg-no-repeat rounded-xl" style={{backgroundImage:`url(${cartoon})`}}></div>
     </div>
    </>
  )
}

export default Footer