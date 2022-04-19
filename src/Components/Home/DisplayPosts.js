import { Link } from "react-router-dom"

const DisplayPosts = (props) => {

    return (
        <div className="bg-white w-86 mb-9 rounded-xl">
            <img src={props.data.thumbnail} className="rounded-t-xl h-35% w-full object-cover "/>
                <Link to="/profile" className="flex justify-between flex-col h-96 w-10/12 mx-auto" onClick={() => {props.setProfileId(props.index)}}>
                    <div className="mt-4">
                        <div className="mb-2">
                            <h5 className="font-barlow font-bold text-red">{props.data.category}</h5>
                            <h3 className="font-barlow font-bold">{props.data.title}</h3>
                        </div>
                        <p className="hover:text-blue font-barlow">{props.data.summary}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="object-cover rounded-full w-14 h-14 " src={props.data.profilePic}/>
                            <div className="ml-3">
                                <p className="font-bold font-barlow">{props.data.username}</p>
                                <p className="font-montserrat ">{props.data.class}</p>
                            </div>
                    </div>
                </Link>
        </div>
        )
}

export default DisplayPosts