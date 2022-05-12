import { useEffect } from "react"
import { Link } from "react-router-dom"

const DisplayRecommended = (props) => {

    return <div className="w-80 mb-10 xlMax:w-64 midMid:w-3/4 2xlMin:w-96">
        <img src={props.data.thumbnail} className="object-cover w-full h-48 rounded-t-xl "/>
        <div className="rounded-b-xl h-19rem bg-white xlMax:h-24 midMid:h-60">
            <Link to="/profile" onClick={() => {props.setProfileId(props.index)}}>
                <div className="container mx-auto w-11/12 h-full flex flex-col pt-3">
                <div className="font-barlow font-bold mb-1">
                    <h1 className="text-pink ">{props.data.category}</h1>
                    <h1 className="xlMax:text-heading6">{props.data.title}</h1>
                </div>
               
                    <p className="font-barlow hover:text-blue smMax:hidden lgMid:hidden">{props.data.summary}</p>
            
               </div>
         </Link>
        </div>
    </div>
}

export default DisplayRecommended