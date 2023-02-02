import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import { userState } from '../../globalstate'
import Box from '@mui/material/Box'
import './ProjectDetail.css'

const Project = ({ location }) => {
  const [user] = useRecoilState(userState)

  const projectData = useLocation()?.state

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <>
        <NavBar />
      <div className="project-detail-container">
        <Box className='project-detail-wrapper'>
          <h3>{projectData.name}</h3>
          <p>{projectData.description}</p>
        </Box>
      </div>
      </>
    )
  }
}

export default Project
