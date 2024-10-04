import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles.js'
import App from './App.jsx'


React.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <App/>
  </StrictMode>,
)
