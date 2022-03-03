import React from 'react'
import CheckIcon from './svgs/benefit-check.svg'

interface Props {
    table:{
        benefit_section_title:string,
        benefits:[any]
    }
}

const BenefitsTable = ({table}:Props) => {

    const {benefit_section_title,benefits } = table;
    console.log(benefits)
  return (
    
    <div className='max-w-[800px] mx-auto flex flex-col gap-2 pt-4'>
        <h3 className='font-bold text-xl py-1'>{benefit_section_title}</h3>
        {
            benefits.map( row => (
                <Benefit row={row} key={row.id}/>
            ))
        }
        
    </div> 
  )
}

export default BenefitsTable;

export const Benefit = ({row}:any) => {
    return(
        <div className='flex flex-row py-1 px-4 md:text-lg justify-between bg-gray-100/50
        border border-gray-200 rounded-2xl' >
            <div className='flex'>{row.benefit_name}</div>
            <div className=' h-8 w-8 rounded-full flex bg-gradient-to-r justify-center items-center from-pink-500 via-red-500 to-yellow-500 text-white'>
             <CheckIcon height='24' width='24'/>	
            </div>
        </div>
    )
}