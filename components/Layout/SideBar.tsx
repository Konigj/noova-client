import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Nav.module.css'
import SocialIcons from './SocialIcons'

type Props = {
  toggleMenu: React.MouseEventHandler<HTMLAnchorElement>,
}

const SideBar = ({toggleMenu}:Props) => {

  const router = useRouter();

  return (
    <div className='max-w-full h-screen flex flex-col bg-white items-center lg:hidden text-4xl text-my-blue'>
      <ul className='flex flex-col gap-12 justify-center text-center mt-40 mb-10'>
            <Link href='/'><a onClick={toggleMenu} className={`${styles.sideLink} ${router.pathname === "/" ? styles.navLinkActive : ""}`}>Inicio</a></Link>  
            <Link href='/tienda'><a onClick={toggleMenu} className={`${styles.sideLink} ${router.pathname === "/tienda" ? styles.navLinkActive : ""}`}>Tienda</a></Link>
            <Link href='/ayuda'><a onClick={toggleMenu} className={`${styles.sideLink} ${router.pathname === "/ayuda" ? styles.navLinkActive : ""}`}>Ayuda</a></Link>
            <Link href='/contacto'><a  onClick={toggleMenu} className={`${styles.sideLink} ${router.pathname === "/contacto" ? styles.navLinkActive : ""}`} >Contacto</a></Link>  
      </ul>
      <SocialIcons />
    </div>
  )
}

export default SideBar