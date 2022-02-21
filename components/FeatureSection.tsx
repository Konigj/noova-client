import Image from "next/image";
import Feature from "./Feature";

const FeatureSection = ({featureSection}: any) => {
    const {feature_image, feature_title, id, subFeatures} = featureSection;
  return (
    <div className='flex flex-col lg:flex-row items-center gap-12 py-10'>

        <div className={`flex flex-1 flex-col items-center lg:items-start ${id % 2 === 0? 'lg:order-2' : ''}`}>
            <h4 className="font-bold text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-my-blue p-5">
                {feature_title}
            </h4>

            <div className="flex flex-col">
                {
                    subFeatures.map( feature => (
                        <Feature key={feature.id} feature={feature} />
                    ))
                }

            </div>
        </div>
           
        <div className={id % 2 === 0? 'lg:order-1' : ''}>
            <Image width={500} height={500} src={feature_image.url} alt={feature_title} />
        </div>
    </div>
  )
}

export default FeatureSection