import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import Layout from '../components/Layout/Layout'
import ProductsList from '../components/ProductsList'

import styles from '../styles/Home.module.css'
import FeatureSection from '../components/featureSection'


const Home: NextPage = ({homeData, productsData} : any) => {

  const {hero_title, hero_description, hero_image,features_title, featuresIndex, slider_title, cta_title, cta_description} = homeData;
  const urlHero : string = hero_image.url;

  return (
    <Layout pageTitle='Inicio' >
      <main>
        <section className='relative w-full py-12 lg:pb-24 bg-gradient-to-r from-cyan-500 to-my-blue'>
         <div className='container flex flex-col lg:flex-row gap-12'>
          <div className='flex flex-1 flex-col lg:items-start lg:w-1/2 z-10 text-white'>
            <h1 className='text-3xl lg:text-5xl font-extrabold lg:mt-20 py-4' >{hero_title}</h1>
            <h2 className={`${styles.typing} text-2xl lg:text-4xl font-bold`}>para tu negocio.</h2>
            <p className='my-5 lg:my-10 lg:text-xl' >{hero_description}</p>
            <Link href='/tienda'>
              Compra Ahora</Link>
          </div>

          <div className='lg:w-1/2'>
            <Image src={urlHero} priority width='500px' height='500px' alt='Hero Image'/>
          </div>
         </div>
        </section>

        <section className='container my-5 '>
          <div className='text-center py-5'>
            <p>Envíos gratis a toda Colombia</p>
            <h1 className={`${styles.sectionTitle}`}>Nuestros Productos</h1>
          </div>
          <ProductsList productsData={productsData}/>
        </section>

        <section className='container py-20'>
          <h1 className={`${styles.sectionTitle}`}>{features_title}</h1>
          <div className='flex flex-col items-center gap-12'>
            {
              featuresIndex.map(featureSection => (
                <FeatureSection key={featureSection.id} featureSection={featureSection}/>
              ) )
            }
          </div>
        </section>
     
      </main>
    </Layout>
  )
}

export default Home;


// type HomeData = {
//   hero_title: string,
//   hero_description: string,
//   hero_image: object,
//   features_title: string,
//   featuresIndex: any[],
//   slider_title: string,
//   cta_title: string,
//   cta_description: string,
// }

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