import DisplayPosts from "./DisplayPosts";
import ReturnPosts from "./ReturnPosts";
import Welcome from "./Welcome";

const HeaderPage = (props) => {

    return (<section className="bg-creme">
    <Welcome/>
    <ReturnPosts setProfileId={props.setProfileId}/>
    </section>)
}

export default HeaderPage;