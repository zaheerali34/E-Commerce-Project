import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/Abouts/About.jsx'
import LeadingPage from './Components/Leading_Pages/LeadingPage.jsx'
import ShopPage from './Components/Shops/ShopPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LeadingPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <ShopPage/> // Placeholder for shop page
      },
      {
        path: '/contacts',
        element: <div>Contact Page</div> // Placeholder for contact page
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
