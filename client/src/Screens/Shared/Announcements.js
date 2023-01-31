import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/NavBar'
import AnnouncementContainer from '../../Components/Announcement/AnnouncementContainer'
import { userState } from '../../globalstate'
import '../../Components/Announcement/Announcement.css'

const Announcements = () => {
  const [user] = useRecoilState(userState)

  if (user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <>
        <NavBar />
        <div className='ann-container'>
          <h1>Announcements</h1>
          <button className='ann-form-submit-btn'>New</button>
          <hr className='ann-line' />
          <AnnouncementContainer />
          <p></p>
        </div>
      </>
    )
  }
}

export default Announcements
