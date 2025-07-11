import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'
import MainLayout from './layout/MainLayout.jsx'

createRoot(document.getElementById('mainroot')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
