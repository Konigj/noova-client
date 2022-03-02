import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/profiles/Baco.module.css'
import "external-svg-loader";

interface Props {
  profile:{
    baco_bg:string,
    baco_Image:{
      url:string
    }
    baco_name:string,
    baco_name_textColor:string,
    baco_links:[any],
    baco_description:string,
    baco_links_bg:string,
    baco_links_textColor:string,
    baco_icons:[any],
    baco_icons_color:string,
    baco_footer_logo:{
      url:string
    }
  }
}

const Baco = ({profile}:Props) => {
 
  const {baco_bg, baco_Image, baco_name, baco_name_textColor, baco_description, baco_links, baco_links_bg,baco_links_textColor, baco_icons, baco_icons_color, baco_footer_logo } = profile;
  console.log(baco_description)

  console.log(profile)

  
  return (
    <main className={`profileContainer  ${styles.baco}`}>
      <section className={`${styles.bacoWrapper}`}
        style={{backgroundImage: `${baco_bg}`}}>
        
        <div className={`${styles.bacoContainerImage}`}>
          <div className={`${styles.bacoImage}`}> 
            <Image src={baco_Image.url} width='100%' height='100%' alt='Profile picture' /> 
          </div>
        </div>

        <div className={`${styles.bacoText}`}>
          <h2 className={`${styles.bacoTextName}`}
          style={{color:`${baco_name_textColor}`}}>{baco_name}</h2>
          {
            baco_description && (
              <div className=' text-left font-medium break-words px-8 whitespace-pre select-text'>
                <p>{baco_description}</p>
              </div>
            )
          }
        </div>

        <div className={`${styles.bacoLinks}`}>
          <ul className={`${styles.bacoLinksContainer}`}
            style={{color:`${baco_links_textColor}`}}>
          
            {
              baco_links.map(link =>(
                <BacoLink key={link.id} link={link} baco_name_textColor={baco_name_textColor} baco_links_textColor={baco_links_textColor} baco_links_bg={baco_links_bg}/>
              ))
            }
          </ul>
        </div>

        <div className={`${styles.bacoIcons}`}>
          <ul className={`${styles.bacoIconsContainer}`}>

          {
                baco_icons.map ( icon => (
                  <BacoIcon key={icon.id} baco_icons_color={baco_icons_color} icon={icon} />
                ))
              }

          </ul>
        </div>

        <div className='container py-5'>
          <div className='w-[120px] mx-auto  hover:scale-105'>
            <Link href='/'>
            <a>
              <Image src={baco_footer_logo.url}  height='100%' width='100%' alt='noova-footer'/>
            </a>
            </Link>
          </div>
        </div>

      </section>
  </main>

  )
}

export default Baco;


export const BacoLink = ({link, baco_links_bg, baco_links_textColor, baco_name_textColor} :any) => {

  const [color, setColor] = useState(baco_links_textColor)
  const [bg, setBg] = useState(baco_links_bg)

  const onHover = () => {
    setBg(`linear-gradient(to right, ${baco_links_textColor}, ${baco_links_textColor})`)
    setColor(baco_name_textColor)
  }

  const noHover = () => {
    setBg(baco_links_bg)
    setColor(baco_links_textColor)
  }

  return (
    <a className={`${styles.bacoLink}`} style={{backgroundImage:`${bg}`, color:`${color}`, outline:`2px solid ${baco_name_textColor}`}}
     href={link.link_url}
      onMouseEnter={() =>  onHover()}
      onMouseLeave={() => noHover()}
     >{link.link_name}</a>
  )
}

export const BacoIcon = ({icon, baco_icons_color} :any) => {

  return (
    <a href={icon.icon_url} className={`${styles.bacoIcon}`}>
      <svg data-src={icon.icon_image.url}  fill={baco_icons_color} width="30" height="30"></svg>
    </a>
  )
}