import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Home/>
  </StrictMode>,
)
