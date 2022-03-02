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
    //   mino_links:[any],
    //   mino_links_bg:string,
    //   mino_links_textColor:string,
    //   mino_icons:[any],
    //   mino_icons_color:string,
    //   mino_footer_logo:{
    //     url:string
    //   }
    // }
  }
}

const Mino = ({profile}: Props) => {

    const {mino_bg,mino_name, mino_description,mino_ubication  } = profile;

    console.log(profile)

  return (
    <main className=''>
        <section>
            <div className="corporativoCover">
                <div className="corporative-cover-image  bg-[position:50%_0%] sm:bg-[position:50%_10%] "
                    style={{backgroundImage:"url('assets/profiles/corporativo/juan-photo.jpg')"}}>
                </div>
            </div>
        
            <div className="corporativoText container">
                <div className="corporativo-logo border-my-blue"
                    style={{backgroundImage:"url('assets/logos/favicon.svg')"}}>
                </div>
                <h2 className="corporativo-text-name text-my-blue">JUAN REY</h2>
                <h4 className="corporativo-text-name text-my-blue/80">Frontend Developer</h4>
                <h5 className="corporativo-text-name text-my-blue/80">Bogotá D.C.</h5>
            </div>


        </section>

    </main>
  )
}

export default Mino