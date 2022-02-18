import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import SideBar from './SideBar'


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setTimeout( () => {
      setIsOpen(!isOpen)
    }, 150)
  };

  useEffect(()=> {
    const hideMenu = () => {
        if(window.innerWidth > 1024 && isOpen)
        setIsOpen(false)
    }
    window.addEventListener('resize', hideMenu);
    return() => {
        window.removeEventListener('resize', hideMenu)
    }
})

  return (
    <header className='flex flex-col min-h-16 lg:h-20 lg:my-8 bg-red-200'>
        <div className='container relative flex py-4 px-8 justify-between h-full items-center'>
            <Link href='/' passHref>
                <a className='w-[150px] h-[30] lg:w-[200px] lg:h-[40px] my-auto flex hover:scale-105 transition-transform duration-300 '>
                    <Image src='/images/logos/white-shadow-logo.png' width='200' height={40} alt='logo'/>
                </a>
            </Link>
            <Navigation toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
            {
              isOpen && <SideBar/>
            }
    </header>
  )
}

export default Header