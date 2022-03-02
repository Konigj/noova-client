import Image from 'next/image';
import Link from 'next/link';

import MapIcon from '../svgs/map.svg'
import styles from '../../styles/profiles/Mino.module.css';

interface Props {
    profile:{
     mino_bg:{
        url:string
    },
       mino_name:string,
       mino_name_textColor:string,
       mino_description:string,
       mino_ubication:string
       mino_logo:{
        url:string
    },
    mino_icons:[any],
    mino_icons_color:string,
    mino_links:[any],
    mino_links_textColor:string,
    mino_links_bg:string,
    mino_footer_logo:{
        url:string
    }
  }
}

const Mino = ({profile}: Props) => {
    console.log(profile)

    const {mino_bg, mino_name,mino_name_textColor, mino_description,mino_ubication, mino_logo, mino_icons, mino_icons_color, mino_links, mino_links_textColor, mino_links_bg, mino_footer_logo } = profile;

  return (
    <main className={`${styles.mino}`}>
        <section className={`${styles.minoWrapper}`}>
            <div className={`${styles.minoCover}`}>
                <div className={`${styles.minoCoverImage} `}  
                    style={{backgroundImage:`url(${mino_bg.url})`}}>
                </div>
            </div>
        
            <div className={`${styles.minoText}`}
            style={{color:mino_name_textColor}}>
                <div className={`${styles.minoLogo}`}
                    style={{backgroundImage:`url(${mino_logo.url})`, borderColor:mino_name_textColor}}>
                </div>
                <h2 className="corporativo-text-name">{mino_name}</h2>
                <h4 className="corporativo-text-name ">{mino_description}</h4>
                {
                    mino_ubication &&(
                        <div className='flex flex-row text-xl gap-2 pt-1 opacity-80'>
                            <MapIcon/> 
                            <h5 className="corporativo-text-name ">{mino_ubication}</h5>
                        </div>
                    )
                }
                
            </div>

            <div className={`${styles.minoIcons}`}>
                 <ul className={`${styles.minoIconsContainer}`}>
                    {
                        mino_icons.map(icon =>(
                            <MinoIcon key={icon.id} icon={icon} mino_icons_color={mino_icons_color} />
                        ))
                    }
           
                </ul>
            </div>

            <div className={`${styles.minoLinks}`}>
                 <ul className={`${styles.minoLinksContainer}`}>
                    {
                        mino_links.map(link =>(
                            <MinoLink key={link.id} link={link} mino_links_textColor={mino_links_textColor} mino_links_bg={mino_links_bg}/>
                        ))
                    }
           
                </ul>
            </div>

            <div className='container'>
                <div className='w-[120px] mx-auto  hover:scale-105'>
                    <Link href='/'>
                        <a>
                            <Image src={mino_footer_logo.url}  height='100%' width='100%' alt='noova-footer'/>
                        </a>
                    </Link>
                </div>
            </div>


        </section>

    </main>
  )
}

export default Mino;


export const MinoIcon = ({icon, mino_icons_color} :any) => {

    return (
      <a href={icon.icon_url} className={`${styles.minoIcon}`}>
        <svg data-src={icon.icon_image.url}  fill={mino_icons_color} width="42" height="42"></svg>
      </a>
    )
}

export const MinoLink = ({link, mino_links_bg, mino_links_textColor} :any) => {

    return (
        <a className={`${styles.minoLink}`} style={{backgroundImage:`${mino_links_bg}`, color:`${mino_links_textColor}`}}
        href={link.link_url}
        >{link.link_name}</a>
    )
}