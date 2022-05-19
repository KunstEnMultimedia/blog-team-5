import Recommended from "./Recommended"

const DisplayProfile = (props) => {
        
    return (
        <section> 
        <img src={props.data.thumbnail} className="w-full h-36rem object-cover"/>
            <div className="container mx-auto w-9/12 mt-8">
                <div className="flex flex-col justify-between mb-5">
                    <h2 className="text-pink text-heading3 font-bold xsMax:h-1/4 ">{props.data.title}</h2>
                    <h2 className="italic"><span className="font-bold">Geschreven door</span> {props.data.username}</h2>
                    {/* <div className="flex justify-center flex-col items-center xsMax:hidden">
                        <img src={props.data.profilePic} className="object-cover rounded-full w-32 h-32"/>
                        <p className="font-barlow font-bold mt-1">{props.data.username}</p>
                    </div> */}
                </div>
               <div className="lg:w-4/6 container mb-12 ">
                    <p className="font-barlow mb-12">{props.data.content}</p>
                </div>
            </div>
    </section>
  
    )
    
}

export default DisplayProfile

