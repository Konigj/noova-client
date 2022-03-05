import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import styles from '../styles/Tienda.module.css'
import Link from "next/link"

const Step = ({step}:any) => {

    const router = useRouter() 
    const [active, setActive] = useState(false)
  
    useEffect(() => {
      if(router.asPath.startsWith(step.url)){
        setActive(true)
      }
      //eslint-disable-next-line
    }, [])
    
    return(
        <div className={`${styles.timelineObject} `}>
        <Link href={step.url === '/personaliza'? '#' : step.url}>
            <a>
                <div className={`${styles.timelineNumber}`}
                style={{background:`${active? '#2F3C54' : '' }`,color:`${active? '#fff' : '' }` }}>
                    <span className="">{step.number}</span>
                </div>
                <div className={`${styles.timelineText}`}
                style={{textDecoration:`${active? ' underline black': ''}`}}>{step.text}</div>
            </a>
        </Link>
        </div>
    )
  }
  
  export default Step