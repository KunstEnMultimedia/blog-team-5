import { Link, Route } from "react-router-dom"

const DisplayPosts = (props) => {

    const host = "https://admin.impresshub.nl";


    return (
        <div className="bg-white w-86 mb-9 rounded-xl 2xl:w-3/12 2xl:mx-1 ">
            <img src={host + props.data.attributes.Thumbnail.data.attributes.url} className="rounded-t-xl h-220px w-full object-cover "/>
                <Link to='/profile' className="flex justify-between flex-col h-96 w-10/12 mx-auto" onClick={() => {props.setProfileId(props.data.id)}}>
                    <div className="mt-4">
                        <div className="mb-2">
                            {/* <h5 className="font-barlow font-bold text-red">{props.data.attributes.Category}</h5> */}
                            <h5 className="font-barlow font-bold text-red">{props.data.attributes.Category}</h5>
                            <h3 className="font-barlow font-bold">{props.data.attributes.Title}</h3>
                        </div>
                        <p className="hover:text-blue font-barlow">{props.data.attributes.Description}</p>
                    </div>
                    <div className="flex items-center pb-3">
                        <img className="object-cover rounded-full w-14 h-14 " src={host + props.data.attributes.Author.data.attributes.Picture.data.attributes.url}/>
                            <div className="ml-3">
                                <p className="font-bold font-barlow">{props.data.attributes.Author.data.attributes.Name}</p>
                                <p className="font-montserrat ">{props.data.attributes.Class.Class}</p>
                            </div>
                    </div>
                {/* </Route> */}
                </Link>
        </div>
        )
}

export default DisplayPosts