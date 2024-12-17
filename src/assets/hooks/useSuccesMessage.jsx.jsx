import { useState } from "react"

export const useSuccesMessage = () => {
  
    // State
    const [isSubmitted,setIsSubmitted] = useState(false)

    // Comportement
    const displaySuccesMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
}

return {isSubmitted, displaySuccesMessage }
}