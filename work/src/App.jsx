import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Form } from 'react-router-dom'
import Layout from "./layout/Layout"; // Correct path
import Start from './pages/Start'
import ContactLayout from './layout/ContactLayout'
import JobPage from './layout/Jobpage'
import Form1 from './components/Form1'
import NotFound from './components/NotFound'
import Job, { jobloader } from './pages/Job'
import Jobdetail, { detailloader } from './components/Jobdetail'
import Error from './components/Error'

function App() {
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "product", element: <Product /> },
        { path: "contact", element: <ContactLayout />, 
          children:[{ path:"form",element:<Form1/>}]
        },
        {path:"start",element:<Start/>},
        {
          path: 'job',
          element: <JobPage />,errorElement:<Error/>,
          children: [{ index: true, element: <Job />, loader: jobloader },
            {path:':id',element:<Jobdetail/>, loader:detailloader}
          ], // Corrected line
        },,
        {path:"*",element:<NotFound/>}
      ],
    },
  ]);
  

  return (
    <>
<RouterProvider router={router1}/>
    </>
  )
}

export default App
