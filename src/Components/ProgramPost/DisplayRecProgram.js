import { Link } from "react-router-dom"

const DisplayRecProgram = (props) => {
    const host = 'https://admin.impresshub.nl';

    return <div className="w-80 mb-10 xlMax:w-64 midMid:w-3/4 2xlMin:w-96">
        <img src={host + props.data.attributes.Image.data.attributes.formats.thumbnail.url} className="object-cover w-full h-48 rounded-t-xl "/>
        <div className="rounded-b-xl h-72 bg-white xlMax:h-24 midMid:h-60">
            <Link to="/programma_post" onClick={() => {props.setProgramId(props.index)}}>
                <div className="container mx-auto w-11/12 h-full flex flex-col pt-3">
                <div className="font-barlow font-bold mb-1">
                    <div className="flex flex-row justify-between mb-2">
                        <h1 className="text-pink ">{props.data.attributes.Type}</h1>
                        <h1>{props.data.date}</h1>
                    </div>
                    <h1 className="xlMax:text-heading6">{props.data.attributes.Title}</h1>
                </div>
               
                    <p className="font-barlow hover:text-blue smMax:hidden lgMid:hidden">{props.data.attributes.Description}</p>
            
               </div>
         </Link>
        </div>
    </div>
}

export default DisplayRecProgram