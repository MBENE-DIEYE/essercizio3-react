import { useFetech } from "./hooks/useFetch"
import useFilteredTodos from "./hooks/useFilteredTodos"

const TodoList = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/todos"
    const { list, cerca } = useFilteredTodos(API_URL)
    if (cerca) {
        <p>Search...</p>
    }
    const { data, loading, error } = useFetech(API_URL)
    if (loading) {

        <p>caricamento...</p>
    }
    if (error) {
        <p>{error}</p>
    }
    return (
        <>
            {
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
            }

            <form >
                <label htmlFor="recerca">recerca</label>
                <input type="text" id="recerca" name="recerca" />
            </form>

            {
                list && list.map((item) => (
                    <ul>
                        {
                        <li>{item.id}</li>
                        }
                    </ul>
                ))
            }
        </>
    )
}


export default TodoList