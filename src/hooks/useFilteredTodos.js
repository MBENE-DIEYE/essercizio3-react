import { useEffect, useState } from "react"

const useFilteredTodos = (data, search) => {
    //   const API_URL = "https://jsonplaceholder.typicode.com/todos"

    const [filtered, setFiltered] = useState([])

    const filterData = () => {
        const dataFilter = data.filter((item) => {
            return item == search
        })
        setFiltered(dataFilter)
    }


    useEffect(() => {
        filterData()
        
    }, [data,search])

    return  filtered
}
export default useFilteredTodos