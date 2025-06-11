import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TextModeContextProvider } from './context/TestModeContext.jsx'

import App from './App.jsx'

import { ThemeContextProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <ThemeContextProvider>
     <TextModeContextProvider>
      <App />
    </TextModeContextProvider>
  </ThemeContextProvider>
 
   
  //</StrictMode>,
)
