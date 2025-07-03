import { useCallback, useMemo, useState } from "react"
import { useFetech } from "./hooks/useFetch"
import useFilteredTodos from "./hooks/useFilteredTodos"

const TodoList = () => {
const inputRef = useRef()
    const API_URL = "https://jsonplaceholder.typicode.com/todos"
    const filter = useFilteredTodos(data,searchTerm)
    const [searchTerm, setSearchTerm] = useState()
   
    const { data, loading, error } = useFetech(API_URL)
    if (loading) {

        <p>caricamento...</p>
    }
    if (error) {
        <p>{error}</p>
    }

    const handhalInput = useCallback(() =>{
    
    },[list])
    const handhalmemo = useMemo(() =>{
      return   list = list.cerca
    },[list])

    useEffect(()=>{
        inputRef.current.focus()
    },[])
   
    return (
        <>
            {/* {
                data && data.map((item) => {
                    return (
                        <>
                        <ul key={item.id}>
                            {
                                <>
                                <li>{item.id}</li>
                                <li>{item.title}</li>
                                </>
                            }
                        </ul>
                           
                        </>


                    )
                })
                
                
            } */}

            <form >
                <label htmlFor="recerca">recerca</label>
                <input type="text" id="recerca" name="recerca"onChange={handhalInput}  ref={inputRef}/>
                 
            </form>

            {
                list && list.map((item) => (
                    <ul key={item.id}>
                        {
                        <li>{item.text}</li>
                        }
                    </ul>
                ))
            }
        </>
    )
}


export default TodoList