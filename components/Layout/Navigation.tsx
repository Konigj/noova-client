import Link from 'next/link'
import { useRouter } from 'next/router'
import ShoppingCart from '../cart/ShoppingCart'

import BurgerMenu from '../svgs/burger-menu.svg'
import ClosedMenu from '../svgs/closed-menu.svg'

import styles from '../../styles/Nav.module.css'
import { isPromise } from 'util/types'

type Props = {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>,
  isOpen: boolean,
  pageTitle:any
}


const Navigation = ({toggleMenu, isOpen, pageTitle}: Props) => {

    const router = useRouter();

  return (
    <nav className='flex flex-row items-center gap-4 lg:gap-12'>
        <ul className='hidden lg:flex lg:flex-row lg:gap-12 font-bold'>
            <Link href='/'><a className={`${pageTitle==='Inicio'? styles.navLinkHome : styles.navLink} ${router.pathname === "/" ? styles.navLinkActiveHome : ""}`}>Inicio</a></Link>  
            <Link href='/tienda'><a className={`${pageTitle==='Inicio'? styles.navLinkHome : styles.navLink} ${router.pathname === "/tienda" ? styles.navLinkActive : ""}`}>Tienda</a></Link>
            <Link href='/ayuda'><a className={`${pageTitle==='Inicio'? styles.navLinkHome : styles.navLink} ${router.pathname === "/ayuda" ? styles.navLinkActive : ""}`}>Ayuda</a></Link>
            <Link href='/contacto'><a className={`${pageTitle==='Inicio'? styles.navLinkHome : styles.navLink} ${router.pathname === "/contacto" ? styles.navLinkActive : ""}`} >Contacto</a></Link>  
        </ul>
        <button className={`lg:hidden text-3xl ${pageTitle==='Inicio' && isOpen===false? 'text-white' : 'text-my-blue'}`} aria-label='Menu Icon' onClick={toggleMenu}>
          {
            isOpen ?  <ClosedMenu/> : <BurgerMenu/>
          }
        </button>
        <ShoppingCart pageTitle={pageTitle} isOpen={isOpen}/>
    </nav>
  )
}

export default Navigation