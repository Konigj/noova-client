import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

interface Props {
  homeData: object
}

const Home: NextPage <Props> = ({homeData}) => {

  const {hero_title, hero_description, hero_image,features_title, featuresIndex, slider_title, cta_title, cta_description} = homeData;

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
            
            <Image priority src={`https://noova-server.herokuapp.com${hero_image.url}`} width='500px' height='500px' alt='Hero Image'/>

          </div>

        </section>
     
      </main>

      <footer>
      </footer>
    </Layout>
  )
}

export default Home;

type HomeData = {
  hero_description: string,
  hero_title: string,
  features_title: string,
  slider_title: string,
  cta_title: string,
  cta_description: number,
  featuresIndex: object
}

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch('https://noova-server.herokuapp.com/homepage');
  // const homeData: HomeData = await response.json()

  try {
    const result = await axios.get('https://noova-server.herokuapp.com/homepage')
    const homeData : HomeData = result.data
    
    return{
      props: {
        homeData,
      }
    }
    
  } catch (error) {
    return {
      notFound: true,
    }
    
  }
  
}
