import { createContext, useEffect, useState } from "react"

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const [lang, setLang] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLang(data)
        setError(error)
        setLoading(false)

    })
    return (
        <TodoContext.Provider value={[lang, setLang, error, loading]}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider