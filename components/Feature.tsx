import Image from "next/image"

const Feature = ({feature} :any) => {
    console.log(feature)
    const {subfeature_title, subfeature_description,subfeature_icon } = feature;
  return (
    <div className='flex flex-row flex-col-2'>
        <div className='w-20 h-20 m-auto'>
           <Image width={70} height={80} src={subfeature_icon.url} alt={subfeature_title}/>
        </div>
        <p className="w-[80%] lg:text-xl p-5 lg:pr-0"><span className="font-bold">{subfeature_title}</span> - {subfeature_description}</p>
    </div>
  )
}

export default Feature