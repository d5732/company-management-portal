import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import TeamContainer from '../../Components/Team/TeamContainer'
import { userState } from '../../globalstate'
import '../../Components/Team/Team.css'
import NavBar from '../../Components/Navbar/NavBar'

const Teams = () => {
  const [user, setUser] = useRecoilState(userState)

  if (user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <>
        <NavBar />
        <div className='team-container'>
          <h1 className='page-headers'>Teams</h1>
          <TeamContainer />
          <p></p>
        </div>
      </>
    )
  }
}

export default Teams
