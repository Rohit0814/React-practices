import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import ListProvider from './store/ListContext';


function App() {



  return (
    <ListProvider>
      <Header />

      <Outlet />

      <Footer />
    </ListProvider>
  )
}

export default App
