import NavBar from "../Home/NavBar"
import Recommended from "./Recommended"
import ReturnProfile from "./ReturnProfile"
import { useEffect } from "react"

const ProfilePage = (props) => {

    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
      },[props.profileId]);

      
    return (<section>
        <NavBar/>
        <ReturnProfile profileId={props.profileId} setProfileId={props.setProfileId}/>
        <Recommended profileId={props.profileId} setProfileId={props.setProfileId}/>
    </section>)
}

export default ProfilePage