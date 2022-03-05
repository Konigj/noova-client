import Image from "next/image"
import axios from "axios"
import { GetStaticProps } from "next"
import Layout from "../components/Layout/Layout"
import Timeline from "../components/Timeline"
import { profileEnd } from "console"
import Link from "next/link"

const Perfil = ({productsPage} : {
    productsPage:{ profile_selection :[any]}}
    ) => {

    const {profile_selection} = productsPage

  return (
    <Layout pageTitle='Elige tu perfil'>
        <main className='container'>

            <Timeline/>
            <section className=" mx-auto  my-10">
                <h1 className="font-bold text-center text-2xl">¡Elige tu perfil!</h1> 
                <div className="grid grid-cols-2 text-center font-bold gap-4 mx-auto py-10 text-xl max-w-[800px]">
                    {
                        profile_selection.map( profile => (
                            <ProfileItem profile={profile} key={profile.id} />
                        ))
                    }
                </div>
            </section>
        </main>
  </Layout>
  )
}

export default Perfil;


export const ProfileItem = ({profile}:any) => {
    const {profile_image, profile_name} =profile;
    return (
        <Link href={`/personaliza/${profile_name.toLowerCase()}`} passHref>
            <div className="cursor-pointer max-w-[250px] mx-auto">
                <Image src={profile_image.url} width='250px' height='500px' alt={`${profile_name} Image`}/>       
                <h3>{profile_name}</h3>
            </div>
        </Link>
)
}

export const getStaticProps: GetStaticProps = async () => {
  
    try {
      const productsPageRes = await axios.get('https://noova-server.herokuapp.com/product-page')
  
      return{
        props: {
            productsPage : productsPageRes.data,
        }, revalidate: 10,
      }
      
    } catch (error) {
      console.log(error)
      return {
        notFound: true,
      }
    }
  }