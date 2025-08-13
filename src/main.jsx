import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/themeContext'
import { LangContextProvider } from './contexts/langContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangContextProvider>
  </StrictMode>
)
