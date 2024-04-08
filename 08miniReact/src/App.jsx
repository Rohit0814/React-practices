import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvide from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvide>
      <Login />
      <Profile />
    </UserContextProvide>
  )
}

export default App
