import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme/index.js'
import { router } from './assets/routers/router.jsx'

createRoot(document.getElementById('root')).render(

<ThemeProvider theme={theme}>
  <RouterProvider router={router} />
</ThemeProvider>



  // <StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </StrictMode>,
)
