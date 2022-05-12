import { Link } from "react-router-dom"

const DisplayBigPost = (props) => {

    return <section className="flex justify-end items-end w-full h-full">
        <Link to="/programma_post"  className="flex justify-end items-end w-full h-full relative" onClick={() => {props.setProgramId(props.data.id)}}>
            <img src={props.data.thumbnail} className="w-10/12 h-full object-cover w-full h-full rounded-md opacity-60"/>
            <div className="absolute font-bold font-barlow flex justify-end items-end flex-col top-2 right-3 w-9/12 opacity-100">
                <h1 className="text-pink text-heading3">{props.data.date}</h1>
                <h1 className="text-blue text-heading4 text-right">{props.data.title}</h1>
            </div>
            </Link>
        </section>
}

export default DisplayBigPost