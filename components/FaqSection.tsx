import Image from "next/image"
import Faq from "./faq"

const FaqSection = ({faqSection}:any) => {

    const {faq_section_icon, faq_section_title, q_and_a} = faqSection
  return (
      <div>
        <div className="flex flex-row gap-5 mt-10">
            <h2 className="text-xl lg:text-2xl font-semibold underline decoration-black my-auto py-0">{faq_section_title}</h2>
            <Image src={faq_section_icon.url} width={40} height={40} alt={faq_section_title}/>
        </div>
        <ul className="flex flex-col py-5 border-b-2 last-of-type:border-none">
            {
                q_and_a.map(faq => (
                    <Faq key={faq.id} faq={faq}/>
                ))
            }
        </ul>

      </div>
  )
}

export default FaqSection