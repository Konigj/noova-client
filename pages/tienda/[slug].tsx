import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'
import Image from "next/image";
import Link from "next/link";

import Layout from '../../components/Layout/Layout'
import Timeline from "../../components/Timeline";

interface Props {
  product:{
    product_title:string,
    product_price:number,
    product_description:string, 
    slug:string,
    product_image:{url:string, height:number, width:number}[],
  }
}

const ProductPage = ({product}: Props)=> {

  const {product_title,product_price,product_description,slug, product_image  } = product;

  return (
    <Layout pageTitle='Productos'>
      <main className='container'>

        <Timeline/>
        <section className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className=" mt-5 product-image order-2 lg:order-1 row-span-2 mx-auto p-5 pt-[12.5%]">
              <Image src={product_image[0].url} height={product_image[0].height} width={product_image[0].width} alt={`${product_title} image`}/>
            </div>
            <div className="product-title order-1 lg:order-2 text-center lg:text-left p-5 pb-0 lg:pt-20">
              <h1 className="font-bold text-3xl lg:text-4xl pb-5">{product_title}</h1>
              <p className="opacity-80 text-justify">{product_description}</p>
            </div>
            <div className="product-CTA order-3 lg:order-2 p-5 ">
              <div className="flex flex-col px-2">
                <p className="my-5 font-bold text-xl">Características:</p>
                <ul className="px-2 pb-10">
                  <li>♾️ Perfil digital personalizado.</li>
                  <li>♾️ Código QR.</li>
                  <li>♾️ Tecnología contactless - sin contacto.</li>
                  <li>♾️ Envíos gratis a principales ciudades.</li>
                </ul>
              </div>
              <Link href={'/tienda/personalizacion'}>
                <a className="bg-my-blue text-white p-2 px-4 rounded-xl">Selecciona tu perfil</a>
              </Link>
            </div>


        </section>
      </main>
    </Layout>
  )
}

export default ProductPage;

export const getStaticPaths = async () => {
    
        const productsRes = await axios.get('https://noova-server.herokuapp.com/products');
        const productsData = productsRes.data
        const paths = productsData.map( (product:{slug:string}) => ({
            params:{slug:product.slug}
        }))
        return {
            paths,
            fallback: false,
        }
};


export const getStaticProps: GetStaticProps = async ({params}:any) => {
    const urlProduct = `https://noova-server.herokuapp.com/products/${params.slug}`
     const productData = await axios.get(urlProduct)

    return{
        props:{
            product:productData.data,
        }, revalidate: 10
    }
}
