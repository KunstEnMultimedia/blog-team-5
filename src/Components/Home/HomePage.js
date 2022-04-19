import { useEffect } from "react";
import DisplayPosts from "./DisplayPosts";
import Programma from "./Programma";
import ReturnPosts from "./ReturnPosts";
import Welcome from "./Welcome";

const HeaderPage = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[window.onload])

    return (<section className="bg-creme">
        <Welcome/>
        <ReturnPosts setProfileId={props.setProfileId}/>
        <Programma/>
    </section>)
}

export default HeaderPage;