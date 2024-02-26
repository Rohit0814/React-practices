import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './Components/PostList';
import Blogpage from './Components/BlogPage';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />

        {/* <PostList /> */}
        {/* <Blogpage /> */}
        <Outlet />

      <Footer />
    </>
  )
}

export default App
