import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../globalstate'
import '../../Components/Team/Team.css'
import NavBar from '../../Components/Navbar/NavBar'
import TeamCard from '../../Components/Team/TeamCard'

const Teams = ({ companyId }) => {
  const [user, setUser] = useRecoilState(userState)

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else if (!user.isAdmin) {
    return <Navigate replace to='/announcements' />
  } else {
    return (
      <>
        <NavBar />
        <div className='team-container'>
          <h1 className='page-headers'>Teams</h1>
          <TeamCard companyId={companyId} user={user} />
        </div>
      </>
    )
  }
}

export default Teams
