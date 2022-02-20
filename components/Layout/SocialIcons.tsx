import React from 'react'

import NoovaIcon from '../svgs/social-icons/noova-icon.svg'
import InstagramIcon from '../svgs/social-icons/instagram-icon.svg'
import WhatsAppIcon from '../svgs/social-icons/whatsapp-icon.svg'
import FacebookIcon from '../svgs/social-icons/facebook-icon.svg'

const SocialIcons = () => {
  return (
    <ul className='flex flex-row gap-8 lg:gap-12 justify-evenly lg:justify-start'>
        <a aria-label='Twitter Icon' className='opacity70-100' href='https://juanrey.co'>
            <NoovaIcon/>
        </a>
        <a aria-label='Twitter Icon' className='opacity70-100' href='https://juanrey.co'>
            <InstagramIcon/>
        </a>
        <a aria-label='Twitter Icon' className='opacity70-100' href='https://juanrey.co'>
            <WhatsAppIcon/>
        </a>
        <a aria-label='Twitter Icon' className='opacity70-100' href='https://juanrey.co'>
            <FacebookIcon/>
        </a>
    </ul>
  )
}

export default SocialIcons