import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import AnnouncementContainer from '../../Components/Announcement/AnnouncementContainer'
import { userState } from '../../globalstate'
import '../../Components/Announcement/Announcement.css'

const Announcements = (props) => {
  const [user] = useRecoilState(userState)

  const location = useLocation();
  console.log(location, " use Location Hook")
  const userCompany = location.state?.data

  if (!user.isLoggedIn) {
    return <Navigate replace to="/" />
  } else {
    return (
      <>
        <NavBar />
        <div className="ann-container">
          <h1>Announcements</h1>
          <button className="ann-form-submit-btn">New</button>
          <hr className="ann-line" />
          <AnnouncementContainer />
          <p></p>
        </div>
        <button onClick={() => console.log(userCompany)}>debug</button>
      </>
    )
  }
}

export default Announcements
