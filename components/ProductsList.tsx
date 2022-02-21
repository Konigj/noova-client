import ProductSquare from "./ProductSquare";

interface Props{
  productsData:[
    product:{
      id:number
    }
  ]
}

const ProductsList = ({productsData}:Props) => {
    
  return (
    <div className='grid grid-cols-2 lg:justify-items-center max-w-[800px] mx-auto gap-8 py-5 items-center'>
        {
            productsData.map( product => (
                <ProductSquare key={product.id} product={product} />
                )
            )
        }
    </div>
  )
}

export default ProductsList;