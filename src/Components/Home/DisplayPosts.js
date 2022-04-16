import { Link } from "react-router-dom"

const DisplayPosts = (props) => {

    return (
        <div className="bg-white w-3/12 rounded-xl">
            <img src={props.data.thumbnail} className="rounded-t-xl"/>
            <Link to="/profile" onClick={() => {props.setProfileId(props.index)}}>
            <h6>{props.data.category}</h6>
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
            <div>
                <img className="object-cover rounded-full w-14 h-14" src={props.data.profilePic}/>
                <div>
                    <p>{props.data.username}</p>
                    <p>{props.data.class}</p>
                </div>
            </div>
            </Link>
        </div>
        )
}

export default DisplayPosts