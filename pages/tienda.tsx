import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'

import Layout from "../components/Layout/Layout"
import BenefitsTable from '../components/BenefitsTable'
import ProductsList from '../components/ProductsList'
import Step from '../components/Step'

import styles from '../styles/Tienda.module.css'

interface Props {
  productsData:[any], 
  benefitsData:{
    id: string, 
    benefits_section:[any]
  }
}

const Tienda : NextPage = ({productsData, benefitsData}:any) => {


  const steps = [
    { 
      number: 1,
      text: 'Elige tu producto',
      url: '/tienda'
    },
    { 
      number: 2,
      text: 'Selecciona tu perfil',
      url: '/perfil'
    },
    { 
      number: 3,
      text: 'Personalízalo',
      url: '/personaliza'
    },
    { 
      number: 4,
      text: 'Checkout',
      url: '/checkout'
    },
]

  return (
    <Layout pageTitle='Tienda'>

    <section className={`timeline-section py-10`}>
        <div className="timeline-container container py-5">
          <ul className={`${styles.timeline}`}>

          {
            steps.map( step => (
              <Step step={step} key={step.number}/>
            ))
          }
          </ul>
        </div>
      </section>


      <section className='benefits-container container my-5'>
        <header>
          <h1 className='sectionTitle py-5'>Beneficios</h1>
        </header>
        {
          benefitsData.benefits_section.map( (table : any) => (
            <BenefitsTable table={table} key={table.id}/>
            ))
        }
        
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
    const [productsRes, benefitsRes] = await Promise.all([
      axios.get('https://noova-server.herokuapp.com/products'),
      axios.get('https://noova-server.herokuapp.com/product-page')
    ])

    return{
      props: {
        productsData : productsRes.data,
        benefitsData: benefitsRes.data
      }, revalidate: 10,
    }
    
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}