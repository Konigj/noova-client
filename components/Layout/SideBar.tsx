import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Nav.module.css'
import SocialIcons from './SocialIcons'

const SideBar = () => {

  const router = useRouter();

  return (
    <div className='max-w-full h-screen flex flex-col bg-white items-center lg:hidden'>
      <ul className='flex flex-col gap-12 justify-center text-center text-4xl mt-40 mb-10'>
            <Link href='/'><a className={`${styles.navLink} ${router.pathname === "/" ? styles.navLinkActive : ""}`}>Inicio</a></Link>  
            <Link href='/tienda'><a className={`${styles.navLink} ${router.pathname === "/tienda" ? styles.navLinkActive : ""}`}>Tienda</a></Link>
            <Link href='/ayuda'><a className={`${styles.navLink} ${router.pathname === "/ayuda" ? styles.navLinkActive : ""}`}>Ayuda</a></Link>
            <Link href='/contacto'><a className={`${styles.navLink} ${router.pathname === "/contacto" ? styles.navLinkActive : ""}`} >Contacto</a></Link>  
      </ul>
      <SocialIcons/>
    </div>
  )
}

export default SideBar