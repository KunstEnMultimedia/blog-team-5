import { Link } from "react-router-dom"
import DisplayPosts from "./DisplayPosts"

const DisplayProgram = (props) => {

    const host = "https://admin.impresshub.nl";
    if (props.dates){
        var date = props.dates
    }

    let text = props.data.attributes.Description;

    if (text.length > 192){
        text = text.slice(0,192) + "...";
    }

    return <div className="bg-white container mx-auto w-7/12 h-56 mb-5 flex mdMax:w-11/12 lgMax:w-9/12">
        <img src={host + props.data.attributes.Image.data.attributes.formats.thumbnail.url} className="object-cover w-2/6 h-full"/>
            <Link to="programma_post" onClick={() => {props.setProgramId(props.data.id)}} className="flex flex-col justify-evenly w-7/12 mx-auto">
            <div>
                <h1 className="font-barlow font-bold text-heading4">{props.data.attributes.Title}</h1>
                <div className="flex flex-row gap-3">
                    <p className="text-pink font-bold font-barlow">{props.data.attributes.Type}</p> 
                    <p className="font-barlow">{date}</p>
                    </div>
            </div>
            <p className="hover:text-blue mdMax:hidden">{text}</p>
            </Link>
                          
    </div>
}

export default DisplayProgram