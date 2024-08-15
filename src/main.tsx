import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.tsx'
import Home from './components/homepage/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
