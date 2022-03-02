import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps} from 'next'
import axios from 'axios';
import Head from 'next/head';

import styles from '../styles/profiles/Baco.module.css';


interface Props {
    profile:{
        baco:{
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
  }

const Mahi = ({profile}:Props) => {
    const {baco_Image, baco_name, baco_name_textColor, baco_description, baco_links, baco_links_bg,baco_links_textColor, baco_icons, baco_icons_color, baco_footer_logo } = profile.baco;  
    
    const [hidden, setHidden] = useState(true)

    const toggleAnswer = (e:any) => {
        
        if(hidden){
            e.target.nextElementSibling.classList.add('hidden')
            e.target.firstChild.nextSibling.textContent ='+'
            
        } else{
            e.target.nextElementSibling.classList.remove('hidden')
            e.target.firstChild.nextSibling.textContent ='-'
        }   
        setHidden(!hidden)
        
    }

    return (
      <>
      <Head>
            <title>Mahi | Noova | Presentación digital</title>
            <meta name="description" content=" Noova - Página web de presentación digital al instante." />
            <meta name="author" content="Juan Rey"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:site" content="@JuanReyAl"/>
            <meta name="twitter:creator" content="@JuanReyAl"/>
        </Head>
            <main className={`profileContainer  ${styles.baco}`}>
              <section className={`w-full min-h-screen bg-no-repeat bg-fixed bg-cover lg:bg-contain bg-[position:50%_50%]`}
              style={{backgroundImage: `linear-gradient(to bottom, rgb(255, 255, 255, 0.2) 70%, rgba(18, 18, 19, 0.3), url('https://res.cloudinary.com/noova/image/upload/v1646188537/Perfiles/users/mahi/2422ea5d-e63a-474e-acad-724687c2ba37_i0e8l6.jpg')`}}
              >
                
                <div className={`${styles.bacoContainerImage}`}>
                  <div className={`mx-auto h-[300px] w-[150px] border-black/20 border-2`}> 
                    <Image src='https://res.cloudinary.com/noova/image/upload/v1646188537/Perfiles/users/mahi/2422ea5d-e63a-474e-acad-724687c2ba37_i0e8l6.jpg' width={150} height={300} alt='Profile picture' /> 
                  </div>
                </div>
        
                <div className={`${styles.bacoText}`}>
                  <h2 className={`${styles.bacoTextName} text-2xl`}
                  style={{textShadow: "rgba(255, 255, 255) 0px 1px 4px "}}
                  >{baco_name}</h2>
          
                  <div className='font-medium break-words px-8 whitespace-pre select-text'>
                    <p className='font-bold'>Qué mis manos te alaben Señor</p>
                    <p className=''> Carrera 58 #67A - 55 - Barrio Modelo </p>
                  </div>
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
      
                <div className='container text-center'>
                  <div onClick={(e)=>toggleAnswer(e)} className="py-2 font-semibold cursor-pointer"> <span>+ </span> Horario de atención</div> 
                  <div className={`faq-answer px-5 pb-5 text-justify hidden`}>
                      <p> 
      
                          -5:00-7:00 am<br/>
                          -8:45 - 12:30 pm <br/>
                          -2:00 - 5:30 pm<br/>
                          <br/>
                          <span className='decoration-cyan-700 underline pb-2'>Jueves y domingo no hay atención</span>
                      </p>
                      <p className='pt-4 font-bold'>
                      
                      </p>
                  </div>
                  <div onClick={(e)=>toggleAnswer(e)} className="py-2 font-semibold cursor-pointer"> <span>+ </span> Medidas de Seguridad</div> 
                  <div className={`faq-answer px-5 pb-5 text-justify hidden`}>
                      <p>
                          🌿 Obligatorio el uso de tapabocas<br/>
                          🚫 No puede asistir con síntomas de gripa o tos<br/>
                          🌿Traer toalla mediana y sábana<br/>
                          🌿Traer crema NIVEA liquida<br/>
                          🌿Usar ropa cómoda (pantalón) no falda<br/>
                          🚫Uñas sin pintar (ni transparente)<br/>
                          🚫No usar el celular, ni entrarlo prendido<br/>
                          🚫No usar joyas, ni metales<br/>
                          🚫No entrar con zapatos<br/>
                          🚫No pueden asistir mujeres con periodo<br/>
      
                      </p>
                  </div>
                </div>
      
                <div className='container flex justify-center w-[100px] h-[100px] rounded-full my-5 p-0 drop-shadow-xl'>
                    <Image src={baco_Image.url} height={100} width={100} alt='mahi logo' />
                </div>
        
                <div className='container py-5 flex'>
                  <div className='w-full lg:w-[120px] hover:scale-105'>
                    <Link href='/'>
                    <a className='justify-center flex'>
                      <Image src={baco_footer_logo.url}  height='100%' width='100%' alt='noova-footer'/>
                    </a>
                    </Link>
                  </div>
                </div>
        
              </section>
          </main>
      </>

    )
  }


export default Mahi
  
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



export const getStaticProps: GetStaticProps = async () => {

    try {
  
      const profilesData = await axios.get(`https://noova-server.herokuapp.com/profiles/mahicenter`);
      return{
          props:{
              profile: profilesData.data
          }, revalidate: 10
      }
      
    } catch (error) {
      
      return {
        notFound: true,
      }
    }
  
    
  }