import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LangProvider from './provider/TodoProvider.jsx'

createRoot(document.getElementById('root')).render(
 <LangProvider>
    <App />
 </LangProvider>
    
 
)
