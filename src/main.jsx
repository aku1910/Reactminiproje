import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Creators from './pages/Creators.jsx'
import Blog from './pages/Blog.jsx'
import Faq from './pages/Faq.jsx'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import CreatorPage from './pages/creator/CreatorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Creators",
        element: <Creators />
      },
      {
        path: "/Blog",
        element: <Blog />
      },
      {
        path: "/Faq",
        element: <Faq />
      },
      {
        path: "/Signup",
        element: <Signup />
      },
      {
        path: "/Signin",
        element: <Signin />
      },
      {
        path: "/creator/:id",
        element: <CreatorPage />
      }
    ]

  }

])

ReactDOM.createRoot(

  document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )