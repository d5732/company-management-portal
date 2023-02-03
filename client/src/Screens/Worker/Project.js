import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import { userState } from '../../globalstate'
import { Link } from 'react-router-dom'
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
          <div className="project-btn-wrapper">
            <Link to="/projects">
              <button className="project-btn">Back To Projects</button>
            </Link>
          </div>
          <Box className="project-detail-wrapper">
            <h3>{projectData.name}</h3>
            <h4 style={{ textAlign: "center" }}>
              Team:{" "}
              <span style={{ fontWeight: 400 }}>
              {projectData.team.name}
              </span>
            </h4>
            <p>{projectData.description}</p>
          </Box>
        </div>
      </>
    )
  }
}

export default Project
