import { Link } from "react-router-dom";
import Datesfunc from "../Functions/Dates";
import MarkdownIt from "markdown-it";

const DisplayProgramPost = (props) => {

    const host = 'https://admin.impresshub.nl';
    const renderer = new MarkdownIt()

    var start = props.data.attributes.Dates[0].StartTime.slice(0, 5)
    var end = props.data.attributes.Dates[0].EndTime.slice(0,5)
    if (props.data.attributes.Type == "Anders"){
        props.data.attributes.Type = ""
    }

        return (
                <section> 
                <img src={host + props.data.attributes.Image.data.attributes.formats.thumbnail.url} className="w-full h-36rem object-cover"/>
                    <div className="container mx-auto w-9/12 mt-8">
                        <div className="flex flex-col justify-between ">
                            <h2 className="text-pink text-heading3 font-bold xsMax:h-1/4 ">{props.data.attributes.Title}</h2>
                            <div className="flex flex-row justify-between w-56 mt-2" >
                                <h1 className="text-heading6 font-bold">{Datesfunc(props.data.attributes.Dates[0].Date)}</h1>
                                <h1 className="text-heading6 ">{props.data.attributes.Type}</h1>
                            </div>
                            <div className="flex md:flex-col mt-2 font-barlow text-paragraphS">
                                <h1>{props.data.attributes.Location}</h1>
                                <h1>{start} - {end}</h1>
                            </div>
                        </div>
                       <div className="lg:w-4/6 container mb-12 mt-8 font-barlow content" dangerouslySetInnerHTML={{__html:renderer.render(props.data.attributes.Content)}}>
        
                        </div>
                    </div>

            </section>
          
            )

}

export default DisplayProgramPost