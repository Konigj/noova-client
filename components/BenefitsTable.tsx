import React from 'react'
import CheckIcon from './svgs/benefit-check.svg'

const BenefitsTable = () => {
  return (
    <>
    <div className='max-w-[800px] mx-auto flex flex-col gap-2'>
        <h3 className='font-bold text-xl py-1'>Links y contenido</h3>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
    </div>
    <div className='max-w-[800px] mx-auto flex flex-col gap-2 mt-5'>
        <h3 className='font-bold text-xl py-1'>Links y contenido</h3>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>Links ilimitados</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
    </div>
    
    </>
  )
}

export default BenefitsTable