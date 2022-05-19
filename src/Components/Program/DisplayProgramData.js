import { Link } from "react-router-dom"

const DisplayProgramData = (props) => {
    return <div className="bg-white h-48 mb-10 w-11/12 lgMax:h-52 flex smMax:w-full smMax:flex smMax:flex-col smMax:h-80">
    <img src={props.data.thumbnail} className="object-cover w-2/6 h-full smMax:w-full smMax:h-4/5"/>
    
    <Link to="/programma_post" className="flex flex-col justify-around w-7/12 mx-auto lgMax:w-9/12 lgMax:ml-3 smMax:w-11/12 smMax:h-full smMax-justify-center" onClick={() => {props.setProgramId(props.data.id)}}>
        <div>
            <h1 className="font-barlow font-bold text-heading5">{props.data.title}</h1>
            <div className="flex flex-row gap-3">
                <p className="text-pink font-bold font-barlow">{props.data.category}</p> 
                <p className="font-barlow">{props.data.date}</p>
                </div>
        </div>
        <p className="lgMax:w-11/12 smMax:hidden">{props.data.summary}</p>
    </Link>             
</div>
}

export default DisplayProgramData