import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AppProvider} from "./Context/ProductContex.jsx"
import { FilterContextProvider } from './Context/filter_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
)
