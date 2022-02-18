import React from 'react'
import ShoppingIcon from '../svgs/shopping-bag.svg'

const SocialIcons = () => {
  return (
    <ul className='flex flex-row flex-wrap gap-12 justify-center lg:justify-start mt-8 text-my-blue text-4xl'>
        <a aria-label='Twitter Link' className='w-[32px] text-my-blue' href='https://juanrey.co'>
            <ShoppingIcon/>
        </a>
        <a aria-label='Twitter Link' className='w-[32px]' href='https://juanrey.co'>
            <ShoppingIcon/>
        </a>
        <a aria-label='Twitter Link' className='w-[32px]' href='https://juanrey.co'>
            <ShoppingIcon/>
        </a>
        <a aria-label='Twitter Link' className='w-[32px]' href='https://juanrey.co'>
            <ShoppingIcon/>
        </a>
        <a aria-label='Twitter Link' className='w-[32px]' href='https://juanrey.co'>
            <ShoppingIcon/>
        </a>

    </ul>
  )
}

export default SocialIcons