import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import axios from 'axios'

import Layout from "../components/Layout/Layout"
import ProductsList from '../components/ProductsList'

const Tienda : NextPage = ({productsData}:any) => {
  return (
    <Layout pageTitle='Tienda'>
      <ProductsList productsData={productsData}/>
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