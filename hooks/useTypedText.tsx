import { useState, useEffect } from "react"

enum Phase {
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL = 150
const PAUSE_INTERVAL = 1000
const DELETING_INTERVAL = 50

 const useTypedText = ( texts: string[]) => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    const [phase, setPhase] = useState(Phase.Typing)
    const [typedText, setTypedText] = useState('')
    useEffect(() => {

        switch(phase) {
            case Phase.Typing:{
                const nextTypedText = texts[selectedIndex].slice(0, typedText.length + 1)
                
                if(nextTypedText === typedText) {
                    setPhase(Phase.Pausing)
                    return
                }

                const timeout = setTimeout(() =>{
                    setTypedText(nextTypedText)
                }, TYPING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Deleting:{
                if(!typedText) {
                    const nextIndex = selectedIndex + 1
                    setSelectedIndex(texts[nextIndex]? nextIndex : 0)
                    setPhase(Phase.Typing)
                    return
                }
                const nextRemaining = texts[selectedIndex].slice(0, typedText.length - 1)

                const timeout = setTimeout(() =>{
                    setTypedText(nextRemaining)
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            }


            case Phase.Pausing:
            default:
                const timeout = setTimeout(() =>{
                    setPhase(Phase.Deleting)
                }, PAUSE_INTERVAL)
                return () => clearTimeout(timeout)
                
        }

      
    }, [texts, typedText, phase, selectedIndex])

    return typedText
  }

  export default useTypedText;