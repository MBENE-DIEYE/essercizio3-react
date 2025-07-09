import { createContext, useEffect, useState } from "react"

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

     const fetchData =async() =>{
       if(!loading) setLoading(true)
       if(error) setError(false)
        
       try {
         const response = await fetch(url)
         if(!response.ok){
            throw new Error("error during fetch data")
         }
         const data = await response.json()
         setData(data)
       } catch (error) {
        console.log(error)
       }

    } 
    
    useEffect(() => {
        fetchData()
        setData(data)
        setError(error)
        setLoading(false)

    })
    return (
        <TodoContext.Provider value={[data, setData, error, loading]}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider