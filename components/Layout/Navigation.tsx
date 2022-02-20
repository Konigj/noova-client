import Link from 'next/link'
import { useRouter } from 'next/router'
import ShoppingCart from '../cart/ShoppingCart'

import BurgerMenu from '../svgs/burger-menu.svg'
import ClosedMenu from '../svgs/closed-menu.svg'

import styles from '../../styles/Nav.module.css'

interface NavigationProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

type Props = {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>,
  isOpen: boolean,
}


const Navigation = ({toggleMenu, isOpen}: Props) => {

  console.log(isOpen)

    const router = useRouter();

  return (
    <nav className='flex flex-row items-center gap-4 lg:gap-12'>
        <ul className='hidden lg:flex lg:flex-row lg:gap-12'>
            <Link href='/'><a className={`${styles.navLink} ${router.pathname === "/" ? styles.navLinkActive : ""}`}>Inicio</a></Link>  
            <Link href='/tienda'><a className={`${styles.navLink} ${router.pathname === "/tienda" ? styles.navLinkActive : ""}`}>Tienda</a></Link>
            <Link href='/ayuda'><a className={`${styles.navLink} ${router.pathname === "/ayuda" ? styles.navLinkActive : ""}`}>Ayuda</a></Link>
            <Link href='/contacto'><a className={`${styles.navLink} ${router.pathname === "/contacto" ? styles.navLinkActive : ""}`} >Contacto</a></Link>  
        </ul>
        <button className='lg:hidden text-2xl text-white' aria-label='Menu Icon' onClick={toggleMenu}>
          {
            isOpen ?  <ClosedMenu/> : <BurgerMenu/>
          }
        </button>
        <ShoppingCart/>

    </nav>
  )
}

export default Navigation