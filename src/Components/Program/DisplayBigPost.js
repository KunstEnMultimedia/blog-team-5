import { Link } from "react-router-dom"

const DisplayBigPost = (props) => {

    const host = "https://admin.impresshub.nl";

    return <section className="flex justify-end items-end w-full h-full lgMax:hidden">
        <Link to="/programma_post"  className="flex justify-end items-end w-full h-full relative" onClick={() => {props.setProgramId(props.data.id)}}>
            <img src={host + props.data.attributes.Image.data.attributes.formats.thumbnail.url} className="w-10/12 h-full object-cover w-full h-full rounded-md opacity-60"/>
            <div className="absolute font-bold font-barlow flex justify-end items-end flex-col top-2 right-3 w-9/12 opacity-100">
                <h1 className="text-pink text-heading3 drop-shadow-2xl">{props.data.attributes.Dates[0].Date}</h1> 
                <h1 className="text-blue text-heading4 text-right">{props.data.attributes.Title}</h1>
            </div>
            </Link> 
        </section>
}

export default DisplayBigPost