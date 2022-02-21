
import { GetStaticProps} from 'next'
import axios from 'axios'
import FaqSection from '../components/FaqSection'
import Layout from '../components/Layout/Layout'


interface Props{
  faqsData:[any]
}

const Ayuda = ({faqsData}: Props) => {

  return (
    <Layout pageTitle='Ayuda'>
      <main className='mt-20'>
        <section className='container py-10'>
        <h1 className="text-2xl lg:text-4xl font-bold text-center">Centro de Ayuda</h1> 
        <div className='container'>
            {
              faqsData.map( faqSection => (
              <FaqSection key={faqSection.id} faqSection={faqSection} />
              )) 
            }
        </div> 

        </section>
      </main>
    </Layout>
  )
}

export default Ayuda

export const getStaticProps: GetStaticProps = async () => {
  
  try {
    const faqsData = await axios.get('https://noova-server.herokuapp.com/faqs')

    return{
      props: {
        faqsData:faqsData.data[0].faq_section
      }, revalidate: 10,
    }
    
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}