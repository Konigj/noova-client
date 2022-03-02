import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'

import Layout from '../../components/Layout/Layout'

interface Props {
  product:{
    product_title:string,
    product_price:number,
    product_description:string, 
    slug:string,
    product_image:{url:string}[],
  }
}

const ProductPage = ({product}: Props)=> {

  const {product_title,product_price,product_description,slug, product_image  } = product;

  return (
    <Layout pageTitle='Product'>
      <main className='mt-20 container'>
        <div>
          <h1>{product_title}</h1>
          <p></p>
        </div>
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
