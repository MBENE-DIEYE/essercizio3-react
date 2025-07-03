import TodoProvider from "./provider/TodoProvider"
import TodoList from "./TodoList"

function App() {


  return (
    
     <TodoProvider>
      <TodoList/>
     </TodoProvider>
    
  )
}

export default App
