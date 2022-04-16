import NavBar from "../Home/NavBar"
import ReturnProfile from "./ReturnProfile"

const ProfilePage = (props) => {

    return (<>
    <NavBar/>
    <ReturnProfile profileId={props.profileId} setProfileId={props.setProfileId}/>
    </>)
}

export default ProfilePage