import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBar from '../../Components/Navbar/NavBar'
import { userState } from '../../globalstate'
import ProjectCard from '../../Components/Project/ProjectCard'

const Projects = ({ handleUser }) => {
  const [user, setUser] = useRecoilState(userState)

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else {
    return (
      <>
        <NavBar />
        <div className='main-container'>
          <h1 className='page-headers'>Projects</h1>
          <ProjectCard handleUser={handleUser}/>
        </div>
      </>
    )
  }
}

export default Projects
