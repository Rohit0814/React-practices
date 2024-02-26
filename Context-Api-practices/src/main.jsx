import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PostList from './Components/PostList.jsx';
import Blogpage from './Components/BlogPage.jsx';


const router = createBrowserRouter([
  {path: '/', element:<App />, children:[
    {path:'/', element:<PostList/>},
    {path:'post',element:<Blogpage />}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
