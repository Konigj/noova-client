import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'

const ProductPage = () => {
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage;

export async function getStaticPaths() {
    
        const products = await axios.get('https://noova-server.herokuapp.com/products');
        const paths = products.map( product => ({
            params:{url:product.id}
        }))
        return {
            paths,
            fallback: false,
        }
};

export async function getStaticProps({params:{url}}){
    const urlProduct = `https://noova-server.herokuapp.com/tienda?url=${url}`
    const product = await axios.get(urlProduct)
    return{
        props:{
            product:product
        }
    }
}

// export const getStaticProps: GetStaticProps = async ({params}) => {



//     return {
//         props: {

//         }
//     }
// }