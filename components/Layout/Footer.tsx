import React from 'react'
import Link from 'next/link'

import SocialIcons from './SocialIcons'
import BlueLogo from '../svgs/blue-shadow-logo.svg'

import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className='container'>
      <div className={styles.footerBorder} ></div>
      <div className='footer__content lg:grid lg:grid-cols-3'>

        <div className='footer__links p-5 lg:col-span-4 order-1'>
          <ul className='flex flex-col lg:grid lg:grid-cols-3'>
            <Link href='/'><a className={styles.footerLink} >Inicio</a></Link>
            <Link href='/contacto'><a className={styles.footerLink} >Contacto</a></Link>
            <Link href='/tienda'><a className={styles.footerLink} >Tienda</a></Link>
            <Link href='/ayuda'><a className={styles.footerLink} >Ayuda</a></Link>
            <Link href='/'><a className={styles.footerLink} >Política de privacidad</a></Link>
            <Link href='/'><a className={styles.footerLink} >Términos y condiciones</a></Link>
          </ul>
        </div>

        <div className='footer__social m-auto lg:order-3 lg:col-span-2 lg:ml-0 text-3xl text-my-blue'>
          <SocialIcons/>
        </div>

        <div className={`${styles.footerBorder} lg:hidden`} ></div>

        <Link href='/' passHref>
            <a aria-label='Logo' className='footer__logo lg:order-2 lg:col-span-2 px-5 flex my-auto'>
              <BlueLogo height='20px' width='100px' className='footer__logo text-xl mx-auto lg:m-0'/>
            </a>
        </Link>


      </div>
      <div className={`${styles.footerBorder} hidden lg:block`} ></div>
      <div className="footer__attribution pb-5 pt-2 text-center text-xs"><a href="https://juanrey.co">Powered by JR</a></div>
    </footer>
  )
}

export default Footer