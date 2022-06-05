import { Link } from "react-router-dom"

const DisplayProgramData = (props) => {

    const host = "https://admin.impresshub.nl";

    let text = props.data.attributes.Description;


    if (text.length > 165){
        text = text.slice(0,165) + "...";
    }

    return <div className="bg-white h-48 mb-10 w-11/12 lgMax:h-52 flex smMax:w-full smMax:flex smMax:flex-col smMax:h-80">
    <img src={host + props.data.attributes.Image.data.attributes.formats.thumbnail.url} className="object-cover w-2/6 h-full smMax:w-full smMax:h-4/5"/>
    
    <Link to="/programma_post" className="flex flex-col justify-around w-7/12 mx-auto lgMax:w-9/12 lgMax:ml-3 smMax:w-11/12 smMax:h-full smMax-justify-center" onClick={() => {props.setProgramId(props.data.id)}}>
        <div>
            <h1 className="font-barlow font-bold text-heading5">{props.data.attributes.Title}</h1>
            <div className="flex flex-row gap-3">
                <p className="text-pink font-bold font-barlow">{props.data.attributes.Type}</p> 
                <p className="font-barlow">{props.data.date}</p>
                </div>
        </div>
        <p className="lgMax:w-11/12 smMax:hidden hover:text-blue">{text}</p>
    </Link>             
</div>
}

export default DisplayProgramData