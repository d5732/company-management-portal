import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import { userState } from '../../globalstate'
import '../../Components/Announcement/Announcement.css'
import AnnouncementCard from '../../Components/Announcement/AnnouncementCard'
import { useState } from 'react'
import CreateAnnouncement from '../../Components/Announcement/Modals/CreateAnnouncement'

const Announcements = ({ handleUser }) => {
  const [user] = useRecoilState(userState)
  const [modal, setModal] = useState(false)

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <>
        <NavBar />
        <div className='main-container'>
          <h1 className='page-headers'>Announcements</h1>
          <div className='ann-container'>
            <div className='btn-wrapper'>
              {user.isAdmin && (
                <button className='ann-btn' onClick={() => setModal(true)}>
                  New
                </button>
              )}
            </div>
            <hr className='ann-line' />
            <AnnouncementCard handleUser={handleUser} />
            {modal && (
              <CreateAnnouncement
                handleUser={handleUser}
                setModal={setModal}
                user={user}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Announcements
