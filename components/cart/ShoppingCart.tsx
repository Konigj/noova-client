import React from 'react'
import ShoppingIcon from '../svgs/shopping-bag.svg'

const ShoppingCart = () => {
  return (
    <div className=' relative flex align-middle justify-center cursor-pointer text-white'>
      <ShoppingIcon className='text-2xl ' aria-label='Shopping-cart' />
      <span className='absolute font-bold text-xs top-2'>1</span>
    </div>
  )
}

export default ShoppingCart