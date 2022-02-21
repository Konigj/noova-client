import Image from 'next/image'
import Link from 'next/link'

const ProductSquare = ({product}:any) => {

    const {product_title, product_description, product_price, product_image, slug} = product
    const imageUrl = product_image[0].url
    const imageWidth=product_image[0].width
    const imageHeight=product_image[0].height



  return (
    <div className='flex flex-col'>
        <div className='mx-auto hover:scale-105'>
            <Link href='/tienda' passHref>
                <Image height={imageHeight} width={imageWidth} src={imageUrl} alt={product_title} />
            </Link>
        </div>
        <div>
            <h2 className='text-center font-bold  text-xl lg:text-2xl p-3'>{product_title}</h2>
            <p><span className='font-bold pr-1'>+ </span>Perfil noova</p>
            <p><span className='font-bold pr-1'>+ </span>Envío gratis a Colombia</p>
        </div>
        <Link href={`/${slug}`}>
            <a className=' mx-auto text-center my-4 py-1 px-5 hover:scale-105 text-white font-bold text-xl tracking-wide rounded-md
            bg-gradient-to-r from-gray-700  via-gray-900 to-black'>Comprar</a>
        </Link>
    </div>
  )
}

export default ProductSquare