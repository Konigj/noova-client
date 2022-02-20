import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import {getHomeData} from './api'
import { Url } from 'url'
import { ReactChildren } from 'react'
import { AppProps } from 'next/dist/shared/lib/router/router'


const Home: NextPage = ({homeData} : any) => {

  const {hero_title, hero_description, hero_image,features_title, featuresIndex, slider_title, cta_title, cta_description} = homeData;

  const urlHero : string = hero_image.url;

  return (
    <Layout pageTitle='Inicio' >

      <main className='bg-red-200'>
        <section className='flex flex-col lg:flex-row w-full container'>
          <div className='lg:w-1/2'>
            <h1>{hero_title}</h1>
            <h2 className='typing'></h2>
            <p>{hero_description}</p>
            <Link href='/tienda'>Compra Ahora</Link>
          </div>

          <div className='lg:w-1/2'>
            
            <Image src={urlHero} priority width='500px' height='500px' alt='Hero Image'/>

          </div>

        </section>
     
      </main>

      <footer>
      </footer>
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
