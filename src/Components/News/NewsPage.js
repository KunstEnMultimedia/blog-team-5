import NavBar from "../Home/NavBar"
import ReturnNews from "./ReturnNews"

const NewsPage = (props) => {
    return <section className="bg-creme">
        <NavBar/>
        <ReturnNews setProfileId={props.setProfileId}/>
    </section>
}

export default NewsPage