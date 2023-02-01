import { Navigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import { userState } from '../../globalstate'
import Box from '@mui/material/Box'


const Project = ({ location }) => {
  const [user] = useRecoilState(userState)

  const projectData = useLocation()?.state
  console.log(projectData)

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <div>
        <NavBar />
        <Box>
          <h1>{projectData.name}</h1>
          <p>{projectData.description}</p>
        </Box>
      </div>
    )
  }
}

export default Project
