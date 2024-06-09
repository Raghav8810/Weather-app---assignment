import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherProvider } from './context/weatherContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>
  <WeatherProvider>
  <App />
</WeatherProvider>
  </ThemeProvider>

  </React.StrictMode>,
)
