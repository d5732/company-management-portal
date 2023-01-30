import { Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import NavBar from "../../Components/NavBar"
import { userState } from "../../globalstate"

const Teams = () => {
    const [user, setUser] = useRecoilState(userState)

    if (!user.isLoggedIn) {
        return <Navigate replace to="/" />
    } else {
        return (
            <div className='main-container'>
                <NavBar />
                <h1>Teams</h1>
                <p></p>
            </div>
        )
    }
}

export default Teams