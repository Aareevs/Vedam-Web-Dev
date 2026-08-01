import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Context from '../Lec-04/Context'
import A from '../Lec-04/A'
import {BrowserRouter}  from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
    <Context.Provider value={"BYE"}> 
    <App />
    </Context.Provider>
    </BrowserRouter>

)
