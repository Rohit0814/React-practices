import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contacts.jsx'
import PortFolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'

const route = createBrowserRouter([
  {path:'/', element:<App />, children:[
    {path:'/',element:<Home />},
    {path:'/About',element:<About />},
    {path:'/contact',element:<Contact />},
    {path:'/portfolio',element:<PortFolio />},
    {path:'/services',element:<Services />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
