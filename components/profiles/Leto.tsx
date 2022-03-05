import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'
import {gsap} from 'gsap'

import styles from '../../styles/profiles/Leto.module.css';
import "external-svg-loader";

interface Props {
  profile:{
    leto_bg:{
      url:string
    },
    leto_name:string,
    leto_name_textColor:string, 
    leto_links:[any],
    leto_links_textColor: string,
    leto_links_bgColor:string,
    leto_icons:[any],
    leto_icons_color:string,
    leto_footer_logo:{
      url:string
    }
  }
}

const Leto = ({profile}:Props) => {

  const {leto_bg, leto_name,leto_name_textColor, 
    leto_links, leto_links_textColor, leto_links_bgColor,
    leto_icons, leto_icons_color, leto_footer_logo } = profile;

    useEffect(() => {
        const tl = gsap.timeline({ defaults: {ease: "power1.out"}});
        tl.fromTo('.leto', {opacity: 0.2}, {opacity: 1, duration: 1.5, stagger:0.25});
        tl.fromTo('.leto-links', {x:'-100%'}, {x:0, duration: 1.5}, '=-1.5');
        tl.fromTo('.leto-icons', {x:'100%'}, {x:0, duration: 1});
        tl.fromTo('.profileFooter', {x:'100%'}, {x:0, duration: 1});
    }, []);


  return (
    <main className={`${styles.leto} leto`}>
      <section className={`${styles.letoWrapper} bg-[position:50%_35%]`}
      style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 70%, rgba(18, 18, 19, 0.9)), url(${leto_bg.url})`}}>

        <div className={`${styles.letoText}`} style={{textShadow: "rgba(18, 18, 19, 0.9) 0px 1px 4px "}}>
          <h2 className={``} style={{color:`${leto_name_textColor}`}}>{leto_name}</h2>
        </div>

          <div className={`${styles.letoLinks} leto-links`}>
            <ul className={`${styles.letoLinksContainer}`} style={{textShadow: "rgba(18, 18, 19, 0.9) 0px 1px 4px", color:`${leto_links_textColor}`}}>
              {leto_links.map( link => (
                <LetoLink key={link.id} link={link} leto_links_bgColor={leto_links_bgColor}/>
              ))

              }
            </ul>
          </div>

          <div className={`${styles.letoIcons} leto-icons`}>
            <ul className={`${styles.letoIconsContainer}`}>
              {
                leto_icons.map ( icon => (
                  <LetoIcon key={icon.id} leto_icons_color={leto_icons_color} icon={icon} />
                ))
              }

            </ul>
          </div>

          <div className='container py-5 profileFooter'>
            <div className='w-[120px] mx-auto  hover:scale-105'>
              <Link href='/'>
              <a>
                <Image src={leto_footer_logo.url}  height='100%' width='100%' alt='noova-footer'/>
              </a>
              </Link>
            </div>
          </div>

      </section>
    </main>
  )
}



export const LetoLink = ({link, leto_links_bgColor} :any) => {

  return (
    <a className={`${styles.letoLink}`} style={{backgroundImage:`${leto_links_bgColor}`}}
     href={link.link_url}>{link.link_name}</a>
  )
}
export const LetoIcon = ({icon, leto_icons_color} :any) => {

  return (
    <a href={icon.icon_url} className={`${styles.letoIcon}`}>
      <svg data-src={icon.icon_image.url}  fill={leto_icons_color} width="30" height="30"></svg>
    </a>
  )
}

export default Leto