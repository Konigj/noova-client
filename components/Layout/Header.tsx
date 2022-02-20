import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import SideBar from './SideBar'
import NoovaWhiteLogo from '../svgs/white-shadow-logo.svg'
import NoovaBlueLogo from '../svgs/blue-shadow-logo.svg'


const Header = ({pageTitle}: any) => {

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
    <header className={`flex flex-col min-h-16 lg:min-h-20 lg:py-8 ${pageTitle==='Inicio' && isOpen==false? 'bg-gradient-to-r from-cyan-500 to-my-blue' :'bg-white'} `}>
        <div className='container relative flex py-4 sm:px-8 justify-between h-full items-center'>
            <Link href='/' passHref>
                <a className='w-[150px] h-[40] lg:w-[200px] lg:h-[40px] my-auto flex hover:scale-105 transition-transform duration-300 '>
                  {pageTitle === 'Inicio' && isOpen === false? (<NoovaWhiteLogo height='100%' width='100%'/>
                  ):(<NoovaBlueLogo height='100%' width='100%'/>)

                  }
                </a>
            </Link>
            <Navigation pageTitle={pageTitle} toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
            {
              isOpen && <SideBar toggleMenu={toggleMenu}/>
            }
    </header>
  )
}

export default Header