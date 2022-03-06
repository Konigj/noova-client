import React from 'react'
import Step from '../components/Step'
import styles from '../styles/Tienda.module.css'

interface Props {
    steps: {
        number: number,
        text: string,
        url: string,
    }[],
}


const Timeline = () => {


    const steps = [
        { 
          number: 1,
          text: 'Elige tu producto',
          url: '/tienda'
        },
        { 
          number: 2,
          text: 'Selecciona tu perfil',
          url: '/tienda/personalizacion'
        },
        { 
          number: 3,
          text: 'Personalízalo',
          url: `/tienda/personalización/`
        },
        { 
          number: 4,
          text: 'Checkout',
          url: '/checkout'
        },
    ]

  return (
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
  )
}

export default Timeline