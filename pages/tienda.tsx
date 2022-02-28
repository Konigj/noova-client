import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import axios from 'axios'

import Layout from "../components/Layout/Layout"
import BenefitsTable from '../components/BenefitsTable'
import ProductsList from '../components/ProductsList'


const Tienda : NextPage = ({productsData}:any) => {
  return (
    <Layout pageTitle='Tienda'>
      <section className='benefits-container container my-5'>
        <header>
          <h1 className='sectionTitle py-5'>Beneficios</h1>
        </header>
        <BenefitsTable/>
      </section>
      <section className='py-5'>
        <div className='text-center py-5'>
          <p>Envíos gratis a toda Colombia</p>
          <h1 className='sectionTitle'>Nuestros Productos</h1>
        </div>

        <ProductsList productsData={productsData}/>
      </section>
    </Layout>
  )
}

export default Tienda;


export const getStaticProps: GetStaticProps = async () => {
  
  try {
    const [productsRes] = await Promise.all([
      axios.get('https://noova-server.herokuapp.com/products')
    ])

    return{
      props: {
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