import Recommended from "./Recommended"

const DisplayProfile = (props) => {
        
    const host = "https://admin.impresshub.nl";

    return (
        <section> 
        <img src={host + props.data.attributes.Thumbnail.data.attributes.url} className="w-full h-36rem object-cover"/>
            <div className="container mx-auto w-9/12 mt-8">
                <div className="flex flex-col justify-between mb-5">
                    <h2 className="text-pink text-heading3 font-bold xsMax:h-1/4 ">{props.data.attributes.Title}</h2>
                    <h2 className="italic"><span className="font-bold">Geschreven door</span> {props.data.attributes.Author.data.attributes.Name}</h2>
                </div>
               <div className="lg:w-4/6 container mb-12 ">
                    <p className="font-barlow mb-12">{props.data.attributes.Content}</p>
                </div>
            </div>
    </section>
  
    )
    
}

export default DisplayProfile

