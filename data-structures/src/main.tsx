import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <MantineProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </MantineProvider>
</StrictMode>,
)
