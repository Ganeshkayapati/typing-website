import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TextModeContextProvider } from './context/TestModeContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <TextModeContextProvider>
     <App />
  </TextModeContextProvider>
   
  //</StrictMode>,
)
