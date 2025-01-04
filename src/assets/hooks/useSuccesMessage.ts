import { useState } from "react"

export const useSuccesMessage = (timeDelay : number = 2000) => {
  
    // State
    const [isSubmitted,setIsSubmitted] = useState(false)

    // Comportement
    const displaySuccesMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, timeDelay)
}

return {isSubmitted, displaySuccesMessage }
}