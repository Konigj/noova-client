import Image from 'next/image';
import Link from 'next/link';

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
    mino_icons:object,
    mino_icons_color:string,
    mino_links:object,
    mino_links_textColor:string,
    mino_links_bg:string,
  }
}

const Mino = ({profile}: Props) => {
    console.log(profile)

    const {mino_bg, mino_name, mino_description,mino_ubication, mino_logo, mino_icons, mino_icons_color, mino_links, mino_links_textColor, mino_links_bg  } = profile;

  return (
    <main className={`${styles.mino}`}>
        <section className={`${styles.minoWrapper}`}>
            <div className={`${styles.minoCover}`}>
                <div className={`${styles.minoCoverImage} `}  
                    style={{backgroundImage:`url(${mino_bg.url})`}}>
                </div>
            </div>
        
            <div className={`${styles.minoText}`}
            style={{color:mino_icons_color}}>
                <div className={`${styles.minoLogo} border-my-blue`}
                    style={{backgroundImage:`url(${mino_logo.url})`}}>
                </div>
                <h2 className="corporativo-text-name">{mino_name}</h2>
                <h4 className="corporativo-text-name ">{mino_description}</h4>
                <h5 className="corporativo-text-name ">{mino_ubication}</h5>
            </div>

            <div className={`${styles.minoIcons}`}>
                 <ul className={`${styles.minoIconsContainer}`}>
           
                </ul>
            </div>

            <div className={`${styles.minoLinks}`}>
                 <ul className={`${styles.minoLinksContainer}`}>
           
                </ul>
            </div>


        </section>

    </main>
  )
}

export default Mino