import { Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import NavBar from "../../Components/NavBar"
import TeamContainer from "../../Components/Team/TeamContainer"
import { userState } from "../../globalstate"
import '../../Components/Team/Team.css'

const Teams = () => {
    const [user, setUser] = useRecoilState(userState)

    if (user.isLoggedIn) {
        return <Navigate replace to="/" />
    } else {
        return (
            <div className="team-container">
                <NavBar />
                <h1>Teams</h1>
                <TeamContainer />
                <p></p>
            </div>
        )
    }
}

export default Teams