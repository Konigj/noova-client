import { useState } from "react"
import ReactMarkdown from "react-markdown"

const Faq  = ({faq}:any) => {

    const [answerHidden, setAnswerHidden] = useState(true)

    const toggleAnswer = () => {
        setAnswerHidden(!answerHidden)
    }

  return (
    <li> 
        <div onClick={toggleAnswer} className="py-2 text-xl font-semibold cursor-pointer"> <span>+ </span> {faq.Question}</div> 
        <div className={`faq-answer px-5 pb-5 text-justify ${answerHidden? "hidden" : ""}`}>
          <ReactMarkdown>{faq.answer}</ReactMarkdown>
          </div>
    </li>
  )
}

export default Faq;