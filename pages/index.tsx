import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import {Autoplay , EffectCoverflow, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import Layout from '../components/Layout/Layout'
import ProductsList from '../components/ProductsList'
import FeatureSection from '../components/FeatureSection'
import useTypedText from '../hooks/useTypedText'

import styles from '../styles/Home.module.css'


const texts = ['para tu negocio.', 'para tu emprendimiento.', 'para ti.', 'para tu empresa.', 'para tu equipo.']

interface Props {
  homeData:{
    hero_title:string,
    hero_description:string,
    hero_image:{
      url:string
    },
    features_title:string,
    featuresIndex:[any], 
    slider_title:string,
    slider_gallery:{url:string}[],
    cta_title:string,
    cta_description:string,
    cta_image:{
       url:string
          }
  },
  productsData:[any]
}

const Home = ({homeData, productsData} : Props) => {

  const {hero_title, hero_description, hero_image,features_title, featuresIndex, slider_title, slider_gallery, cta_title, cta_description, cta_image} = homeData;

  const typedText = useTypedText(texts)
  return (
    <Layout pageTitle='Inicio'>
      <main>
        <section className='relative w-full py-12 lg:pb-24 bg-gradient-to-r from-cyan-500 to-my-blue'>
         <div className='container flex flex-col lg:flex-row gap-12'>

          <div className='flex flex-1 flex-col lg:items-start lg:w-1/2 z-10 text-white min-h-[300px]'>
            <h1 className='text-3xl lg:text-5xl font-extrabold lg:mt-20 pb-4' >{hero_title}</h1>
            <div className='min-h-[32px] lg:min-h-[40px]'>
              <h2 className={`${styles.typing} text-2xl lg:text-4xl font-bold`}>{typedText}</h2>
            </div>
            <p className='my-4 lg:my-8 lg:text-xl' >{hero_description}</p>
            <Link href='/tienda' passHref>
              <div className='bg-white my-5 lg:my-10 py-1 lg:text-xl rounded-md hover:bg-gradient-to-r mx-auto lg:mx-0 hover:from-gray-700 hover:via-gray-900 hover:to-black transition-colors'>
                <a className=' text-transparent bg-clip-text p-2 hover:text-white font-bold text-center  px-8
                bg-gradient-to-r  from-gray-700 via-gray-900 to-black
                '>Compra Ahora</a>
              </div>
              
              </Link>
          </div>

          <div className='lg:w-1/2'>
            <Image src={hero_image.url} priority width='500px' height='500px' alt='Hero Image'/>
          </div>
         </div>
        </section>

        <section className='container my-5 '>
          <div className='text-center py-5'>
            <p>Envíos gratis a toda Colombia</p>
            <h1 className='sectionTitle'>Nuestros Productos</h1>
          </div>
          <ProductsList productsData={productsData}/>
        </section>

        <section className='container py-20'>
          <h1 className='sectionTitle'>{features_title}</h1>
          <div className='flex flex-col items-center gap-12'>
            {
              featuresIndex.map(featureSection => (
                <FeatureSection key={featureSection.id} featureSection={featureSection}/>
              ) )
            }
          </div>
        </section>

        <section className='py-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 '>
          <h1 className='sectionTitle text-white py-5'>{slider_title}</h1>
          <div className='container w-full h-full mt-5 select-none'>
            <Swiper 
            effect={"coverflow"}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
          }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            
            >
              <SwiperSlide className='py-4'>
                <Image src={slider_gallery[0].url} width='250px' height='490px' alt='swiper1'/>
              </SwiperSlide>

              <SwiperSlide className='py-4'>
                <Image src={slider_gallery[1].url} width='250px' height='490px' alt='swiper2'/>
              </SwiperSlide>

              <SwiperSlide className='py-4'>
                <Image src={slider_gallery[2].url} width='250px' height='490px' alt='swiper3'/>
              </SwiperSlide>

              <SwiperSlide className='py-4'>
                <Image src={slider_gallery[3].url} width='250px' height='490px' alt='swiper4'/>
              </SwiperSlide>

              <SwiperSlide className='py-4'>
                <Image src={slider_gallery[4].url} width='250px' height='490px' alt='swiper5'/>
              </SwiperSlide>
            </Swiper>
            
          </div>
        </section>

        <section className=' py-10 container'>
            <div className='flex flex-col lg:flex-row gap-12 items-center w-full'>
              <div className='lg:w-1/2'>
                <Image src={cta_image.url} width="600px" height="500px" alt={cta_title}/>
              </div>
              <div className='lg:w-1/2 text-center'>
                <h4 className='font-bold text-4xl py-5'>{cta_title}</h4>
                <p className='text-xl opacity-70'>{cta_description}</p>
                <div className='my-5 lg:my-10 text-center'>
                  <Link href='/tienda'><a className=' py-2 px-5 font-bold text-xl lg:text-3xl tracking-wide text-white rounded-md
                  bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:scale-105'>Comprar</a></Link>
                </div>
              </div>

            </div>
        </section>
     
      </main>
    </Layout>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  
  try {
    const [homeRes, productsRes] = await Promise.all([
      axios.get('https://noova-server.herokuapp.com/homepage'),
      axios.get('https://noova-server.herokuapp.com/products')
    ])
    return{
      props: {
        homeData: homeRes.data,
        productsData : productsRes.data
      }, revalidate: 10,
    }
    
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}