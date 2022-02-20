import React from 'react'
import ShoppingIcon from '../svgs/shopping-bag.svg'

type props ={
  pageTitle:any,
  isOpen : boolean,
}

const ShoppingCart = ({pageTitle, isOpen}:props) => {
  return (
    <div className={`relative flex align-middle justify-center cursor-pointer ${pageTitle==='Inicio' && isOpen === false? 'text-white' : 'text-my-blue'}`}>
      <ShoppingIcon className='text-2xl ' aria-label='Shopping-cart' />
      <span className='absolute font-bold text-xs top-2'>1</span>
    </div>
  )
}

export default ShoppingCart