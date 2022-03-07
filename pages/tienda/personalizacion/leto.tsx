import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout/Layout'
import Timeline from '../../../components/Timeline'
import {LetoLink, LetoIcon} from '../../../components/profiles/Leto'
import styles from '../../../styles/profiles/Leto.module.css'




const LetoPersonalization = () => {

  const [letoName, setLetoName] = useState('Tu Nombre');
  const [letoBg, setLetoBg] = useState("https://res.cloudinary.com/noova/image/upload/v1645451363/juan_photo_b3gorr_0d6581ca1d.jpg")
  const [checked, setChecked] = useState(false);

  const previewFile = (e:any) => {
    
    let file = e.target.files[0];
    let reader: any = new FileReader();   
     reader.onloadend = () => {
      setLetoBg(reader.result)
     }

    if(file) {
        reader.readAsDataURL(file)
        
    } 

  }

  const profile = {
    leto_bg:{
      url:letoBg
    },
    leto_name: letoName,
    leto_name_textColor:"#fff", 
    leto_links:[
      {
        id:1,
        link_name:'Portfolio',
        link_url:'https://juanrey.co'
      },{
        link_name:'Noova',
        link_url:'https://juanrey.co',
        id:2,
      }
    ],
    leto_links_textColor: "#fff",
    leto_links_bgColor:"linear-gradient(to right, rgb(250 204 21 / 0.8), rgb(253 224 71 / 0.8))",
    leto_icons:[
      {
        id:1,
        icon_url:' https://instagram.com/jrey_a',
        icon_image:'https://res.cloudinary.com/noova/image/upload/v1645451692/instagram_icon_wjf1on_7e48b50b5f.svg'
      },{
        id:2,
        icon_url:' https://instagram.com/jrey_a',
        icon_image:'https://res.cloudinary.com/noova/image/upload/v1645451692/instagram_icon_wjf1on_7e48b50b5f.svg'
      }
    ],
    leto_icons_color:"#fff",
    leto_footer_logo:{
      url:"https://res.cloudinary.com/noova/image/upload/v1646081461/white_shadow_logo_vysjik_ae77688a04.svg"
    }
  }
  const {leto_bg, leto_name,leto_name_textColor, 
    leto_links, leto_links_textColor, leto_links_bgColor,
    leto_icons, leto_icons_color, leto_footer_logo } = profile;


    const changeColors = (e:any) => {
      e.preventDefault();
      console.log('hola')
    }
  

  return (
    <Layout pageTitle='Personaliza tu perfil'>
        <main className='container'>
        <Timeline/>
          <div id="personalization-leto" className="personalization-container flex flex-col gap-8 lg:flex-row">
              <div className="personalization-form lg:w-1/2">
                <form action="https://formsubmit.co/contacto@noova.site" method="POST">
                  <input type="hidden" name="_next" value="https://noova.site/enviado.html"/>
                  <input type="hidden" name="_subject" value="Nueva solicitud Noova-contacto"/>
                  <input type="text" name="_honey" style={{display:'none'}}/>
                  <input type="hidden" name="_template" value="table"/>
                  

                  <div className="form-personalization-container">

                    <h3 className="col-span-2 text-center font-bold text-2xl lg:text-3xl mb-5">Personalización Leto</h3>

                    <div className='my-5'>
                      <label className="text-sm opacity-70" htmlFor="profile-slug">Enlace del perfil* - noova.app/...</label>
                      <input type="text" placeholder='noova.app/TuLink' name="profile-slug" size={20} maxLength={20} required/>
                      
                      <label className="text-sm opacity-70" htmlFor="profile-name">Nombre del perfil*</label>
                      <input  onChange={(e)=>setLetoName(e.target.value)} id="leto-profile-name-input" type="text" name="profile-name" size={20} maxLength={20} required/>

                      <label className="text-sm opacity-70" htmlFor="leto-profile-bg">Imagen de fondo*</label>
                      <input id="leto-profile-bg-input-file" type="file" onChange={(e) =>previewFile(e)} name="leto-profile-bg"
                      accept=".jpeg, .jpg, .png, .webp, .svg" required/>
                    </div>


                    <div className="color-selection flex flex-col gap-3 py-2">
                      <h4 className='font-bold'>Colores:</h4>

                      <p className={`text-sm opacity-70 ${checked? 'hidden' : ''}`}>Colores predeterminados:</p>
                      <div className={`flex flex-row justify-between ${checked? 'hidden' : ''}`}>
                        <div className="flex flex-col py-1 text-center">
                          <button onClick={(e)=>changeColors(e)} className='bg-yellow-500 w-[50px] h-[50px] rounded-full'/>
                          <label className="text-sm opacity-70 py-1" htmlFor="profile-name-color">Amarillo</label>
                        </div>
                        <div className="flex flex-col py-1 text-center">
                          <button onClick={(e)=>changeColors(e)} className='bg-red-500 w-[50px] h-[50px] rounded-full'/>
                          <label className="text-sm opacity-70 py-1" htmlFor="profile-links-bg">Rojo</label>
                        </div>
                        <div className="flex flex-col py-1 text-center">
                          <button onClick={(e)=>changeColors(e)} className='bg-green-500 w-[50px] h-[50px] rounded-full'/>
                          <label className="text-sm opacity-70 py-1" htmlFor="profile-links-text-color">Verde</label>
                        </div>
                      </div>

                      <div className="flex flex-col py-1">
                        <div className='flex flex-row items-baseline w-full'>
                          <label className="text-sm opacity-70 py-1" htmlFor="profile-links-text-color">¿Quieres elegir otros colores?</label>
                          <input className='w-fit ml-4' type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} />
                        </div>
                        <div className={`${checked? '' : 'hidden'}`}>
                          <input className='w-[100px] h-[20px]' type="color" name="profile-links-text-color" required/>

                        </div>
                      </div>
                        
                    </div>
                    

                    <div className="leto-form-link leto-form-link-1 py-2">
                      <h1>Link 1</h1>
                      <label className="text-sm opacity-70" htmlFor="leto-link-1-text">Texto del botón</label>
                      <input id="leto-link-text" type="text" name="leto-link-1-text" required/>

                      <label className="text-sm opacity-70" htmlFor="leto-link-1-link">Link</label>
                      <input id="leto-link-1-link" type="text" name="leto-link-1-link" required/>
                    </div>
                    <div className="leto-form-link leto-form-link-2 py-2">
                      <h1>Link 2</h1>
                      <label className="text-sm opacity-70" htmlFor="leto-link-2-text">Texto del botón</label>
                      <input id="leto-link-text" type="text" name="leto-link-2-text" required/>

                      <label className="text-sm opacity-70" htmlFor="leto-link-2-link">Link</label>
                      <input id="leto-link-2-link" type="text" name="leto-link-2-link" required/>
                    </div>
                    <div className="leto-form-link leto-form-link-3 py-2">
                      <h1>Link 3</h1>
                      <label className="text-sm opacity-70" htmlFor="leto-link-3-text">Texto del botón</label>
                      <input id="leto-link-text" type="text" name="leto-link-3-text" required/>

                      <label className="text-sm opacity-70" htmlFor="leto-link-3-link">Link</label>
                      <input id="leto-link-3-link" type="text" name="leto-link-3-link" required/>
                    </div>
                    <div className="leto-form-link leto-form-link-4 py-2">
                      <h1>Link 4</h1>
                      <label className="text-sm opacity-70" htmlFor="leto-link-4-text">Texto del botón</label>
                      <input id="leto-link-text" type="text" name="leto-link-4-text" required/>

                      <label className="text-sm opacity-70" htmlFor="leto-link-4-link">Link</label>
                      <input id="leto-link-4-link" type="text" name="leto-link-4-link" required/>
                    </div>

                    <div className="leto-form-icons py-2">
                      <h1>Elige tus íconos</h1>

                      <div className="icon1 py-2">
                        <h2>Ícono 1</h2>
                        <select name="icon1" id="icon1">
                          <option value="correo">Correo</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="linkedin">Linkedin</option>
                          <option value="snapchat">Snapchat</option>
                          <option value="spotify">Spotify</option>
                          <option value="telegram">Telegram</option>
                          <option value="tiktok">TikTok</option>
                          <option value="twitter">Twitter</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="youtube">Youtube</option>
                        </select>
                        <label className="text-sm opacity-70" htmlFor="icon1-link">Link ícono 1</label>
                        <input id="icon1-link" type="text" name="icon1-link"/>
                      </div>
                      <div className="icon2 py-2">
                        <h2>Ícono 2</h2>
                        <select name="icon2" id="icon2">
                          <option value="correo">Correo</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="linkedin">Linkedin</option>
                          <option value="snapchat">Snapchat</option>
                          <option value="spotify">Spotify</option>
                          <option value="telegram">Telegram</option>
                          <option value="tiktok">TikTok</option>
                          <option value="twitter">Twitter</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="youtube">Youtube</option>
                        </select>
                        <label className="text-sm opacity-70" htmlFor="icon2-link">Link ícono 2</label>
                        <input id="icon2-link" type="text" name="icon2-link"/>
                      </div>
                      <div className="icon3 py-2">
                        <h2>Ícono 3</h2>
                        <select name="icon3" id="icon3">
                          <option value="correo">Correo</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="linkedin">Linkedin</option>
                          <option value="snapchat">Snapchat</option>
                          <option value="spotify">Spotify</option>
                          <option value="telegram">Telegram</option>
                          <option value="tiktok">TikTok</option>
                          <option value="twitter">Twitter</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="youtube">Youtube</option>
                        </select>
                        <label className="text-sm opacity-70" htmlFor="icon3-link">Link ícono 3</label>
                        <input id="icon3-link" type="text" name="icon3-link"/>
                      </div>
                      <div className="icon4 py-2">
                        <h2>Ícono 4</h2>
                        <select name="icon4" id="icon4">
                          <option value="correo">Correo</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="linkedin">Linkedin</option>
                          <option value="snapchat">Snapchat</option>
                          <option value="spotify">Spotify</option>
                          <option value="telegram">Telegram</option>
                          <option value="tiktok">TikTok</option>
                          <option value="twitter">Twitter</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="youtube">Youtube</option>
                        </select>
                        <label className="text-sm opacity-70" htmlFor="icon4-link">Link ícono 4</label>
                        <input id="icon4-link" type="text" name="icon4-link"/>
                      </div>
                    </div>
                  </div>

                  <div className="submit-button-container"> 
                    <button type="submit">Agregar producto y perfil al carrito</button>
                  </div>

                </form>
              </div>
              <div className="personalization-profile lg:w-1/2 ">
                <div className={`lg:max-w-md lg:mx-auto rounded-2xl select-none overflow-x-hidden bg-fixed leto`}>
                  <section className={`w-full min-h-screen bg-no-repeat bg-cover  bg-[position:50%_35%]`}
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
                </div>
              </div>
              <div>

              </div>
            </div>
        </main>
  </Layout>
  )
}

export default LetoPersonalization