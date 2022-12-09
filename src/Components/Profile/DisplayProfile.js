
import MarkdownIt from "markdown-it";
import { Link } from "react-router-dom";

const DisplayProfile = (props) => {
        
    const host = "https://admin.impresshub.nl";
    const renderer = new MarkdownIt()

    var text = props.data.attributes.Content;
    var author = props.data.attributes.Author
    // .data.attributes.Name
    if (typeof author != 'undefined'){
        author.data.attributes.Name = 'Anoniem'
    }

    return (
        <section> 
        <img src={host + props.data.attributes.Thumbnail.data.attributes.url} className="w-full h-36rem object-cover smMax:h-80 smMax:pt-3"/>
        <Link to='/profile' onClick={() => {props.setProfileId(props.id)}}>
            <div className="container mx-auto w-9/12 mt-8">
                <div className="flex flex-col justify-between mb-5">
                    <h2 className="text-pink text-heading3 font-bold xsMax:h-1/4 ">{props.data.attributes.Title}</h2>
                    <h2 className="italic"><span className="font-bold">Geschreven door </span>{author.data.attributes.Name}</h2>
                </div>
               <div className="lg:w-4/6 container mb-12 font-barlow content" dangerouslySetInnerHTML={{__html:renderer.render(props.data.attributes.Content)}}>
                    
                </div>
            </div>
            </Link>
    </section>
  
    )
    
}

export default DisplayProfile

