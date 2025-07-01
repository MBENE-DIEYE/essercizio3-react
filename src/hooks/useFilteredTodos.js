import { useEffect, useState } from "react"

const useFilteredTodos = (url) =>{
//   const API_URL = "https://jsonplaceholder.typicode.com/todos"

    const [list, setList] = useState()
    const [cerca, setCerca] = useState()

    const fetchData = async() =>{
             if(cerca) setCerca(true)
        try {
            const respose = await fetch(url)
            if(!respose.ok){
                throw new Error("error during fetch")
            }
            const data = await respose.json()
            setList(data.cerca)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchData()
    },[url])

    return(
        {
            list,
            cerca
        }
       
    )
}
export default useFilteredTodos