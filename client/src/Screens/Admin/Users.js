import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'

import UserContainer from '../../Components/User/UserContainer'
import { userState } from '../../globalstate'

const Users = () => {
  const [user, setUser] = useRecoilState(userState)

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else if (!user.isAdmin) {
    return <Navigate replace to='/announcements' />
  } else {
    return (
      <>
        <NavBar />
        <div className='main-container'>
          <UserContainer />
        </div>
      </>
    )
  }
}

export default Users
