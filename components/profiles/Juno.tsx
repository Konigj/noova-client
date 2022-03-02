import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/profiles/Juno.module.css';
import "external-svg-loader";

interface Props {
    profile:{
      juno_cover:{
        url:string
      },
      juno_profile_image: {
        url:string,
      },
      juno_bg:string,
      juno_name:string, 
      juno_name_textColor:string, 
      juno_description:string, 
      juno_links:[any], 
      juno_links_textColor:string, 
      juno_icons:[any], 
      juno_icons_color:string, 
      juno_footer_logo:{
        url:string
      }
  }
}


const Juno = ({profile}:Props) => {


  const {juno_cover, juno_profile_image, juno_bg, juno_name, juno_name_textColor, juno_description, juno_links, juno_links_textColor, juno_icons, juno_icons_color, juno_footer_logo} = profile;
  
  return (
    <main className={`${styles.juno}`}>
      <section>

        <div className={`${styles.junoCover}`}
        style={{background:`url(${juno_cover.url})`}}>
        </div>

        <div className={`${styles.junoContainer}`}
        style={{background:`${juno_bg}`}}>
        
          <div className={`${styles.junoImage}`}>
              <Image src={juno_profile_image.url} width='100%' height='100%' alt='Profile picture' />
          </div>

          <div style={{color:`${juno_name_textColor}`}}>
            <h2 className='text-4xl font-bold'
            style={{textShadow:`1px 2px 1px rgba(0,0,0,0.3)`}}
            >{juno_name}</h2>
            <h4 className="text-xl py-2">{juno_description}</h4>
          </div>
          
          <div className={`${styles.junoIcons}`}>
            <ul className={`${styles.junoIconsContainer}`}>
              {
                  juno_icons.map(icon =>(
                      <JunoIcon key={icon.id} icon={icon} juno_icons_color={juno_icons_color} />
                  ))
              }
            </ul>
          </div>

          <div className={`${styles.junoLinks}`}>
            <ul className={`${styles.junoLinksContainer}`}>
              {
                  juno_links.map(link =>(
                      <JunoLink key={link.id} link={link} juno_links_textColor={juno_links_textColor}/>
                  ))
              }
            </ul>
          </div>

          <div className='container'>
            <div className='w-[120px] mx-auto  hover:scale-105'>
                <Link href='/'>
                    <a>
                        <Image src={juno_footer_logo.url}  height='100%' width='100%' alt='noova-footer'/>
                    </a>
                </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Juno;


export const JunoIcon = ({icon, juno_icons_color} :any) => {

  return (
    <a href={icon.icon_url} className={`${styles.junoIcon}`}>
      <svg data-src={icon.icon_image.url}  fill={juno_icons_color} width="32" height="32"></svg>
    </a>
  )
}

export const JunoLink = ({link, juno_links_textColor} :any) => {

  return (
      <a className={`${styles.junoLink}`} style={{color:`${juno_links_textColor}`}}
      href={link.link_url}
      >
        <svg data-src={link.link_icon.url} fill={juno_links_textColor} width="30" height="30" aria-label='link-icon'>
        </svg>  
      {link.link_name}</a>
  )
}