import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import {getHomeData} from './api'


const Home: NextPage = ({homeData} : any) => {

  const {hero_title, hero_description, hero_image,features_title, featuresIndex, slider_title, cta_title, cta_description} = homeData;
  const urlHero : string = hero_image.url;

  return (
    <Layout pageTitle='Inicio' >
      <main>
        <section className='relative w-full py-12 lg:pb-24 bg-gradient-to-r from-cyan-500 to-my-blue'>
         <div className='container flex flex-col lg:flex-row gap-12'>
          <div className='flex flex-1 flex-col lg:items-start lg:w-1/2 z-10 text-white'>
            <h1 className='text-3xl lg:text-5xl font-extrabold lg:mt-20 py-4' >{hero_title}</h1>
            <h2 className='typing text-2xl lg:text-4xl font-bold'>para tu negocio.</h2>
            <p className='my-5 lg:my-10 lg:text-xl' >{hero_description}</p>
            <Link href='/tienda'>
              Compra Ahora</Link>
          </div>

          <div className='lg:w-1/2'>
            <Image src={urlHero} priority width='500px' height='500px' alt='Hero Image'/>
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
    const result = await getHomeData()
    
    return{
      props: {
        homeData: result,
      }, revalidate: 10,
    }
    
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}
