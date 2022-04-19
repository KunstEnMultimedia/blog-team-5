import DisplayPosts from "./DisplayPosts"

const DisplayProgram = (props) => {

    return <div className="bg-white container mx-auto w-7/12 h-56 mb-5 flex">
        <img src={props.data.thumbnail} className="object-cover w-2/6 h-full"/>
        <div className="flex flex-col justify-evenly w-7/12 mx-auto">
            <div>
                <h1 className="font-barlow font-bold text-heading4">{props.data.title}</h1>
                <div className="flex flex-row gap-3">
                    <p className="text-pink font-bold font-barlow">{props.data.category}</p> 
                    <p className="font-barlow">{props.data.date}</p>
                    </div>
            </div>
            <p>{props.data.summary}</p>
        </div>
                          
    </div>
}

export default DisplayProgram