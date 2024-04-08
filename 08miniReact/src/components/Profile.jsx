import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

  return (
    <div>
        {user ?<div>Welcome {user.userName}</div>:<div>Please Login</div>}
    </div>
  )
}

export default Profile