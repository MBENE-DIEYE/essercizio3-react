import { useFetech } from "./hooks/useFetch"

const TodoList = () =>{

    const API_URL="https://jsonplaceholder.typicode.com/todos"
    const {} = useFetech (API_URL,{method:"GET"})
    return(
        <>
        </>
    )
}
export default TodoList