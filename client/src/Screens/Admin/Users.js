import { Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import NavBar from "../../Components/NavBar"
import UserContainer from "../../Components/User/UserContainer"
import { userState } from "../../globalstate"

const Users = () => {
    const [user, setUser] = useRecoilState(userState)

     
    // if (!user.isLoggedIn) {
    //     return <Navigate replace to="/" />
    // } else {
        return (
            <div className='main-container'>
                <NavBar />
                <UserContainer />
            </div>
        )
    // }
}

export default Users