import { Link } from "react-router-dom"

const DisplayProgramPost = (props) => {

        return (
                <section> 
                <img src={props.data.thumbnail} className="w-full h-36rem object-cover"/>
                    <div className="container mx-auto w-9/12 mt-8">
                        <div className="flex flex-col justify-between ">
                            <h2 className="text-pink text-heading3 font-bold xsMax:h-1/4 ">{props.data.title}</h2>
                            <div className="flex flex-row justify-between w-56 mt-2" >
                                <h1 className="text-heading6 font-bold">{props.data.date}</h1>
                                <h1 className="text-heading6 ">{props.data.category}</h1>
                            </div>
                        </div>
                       <div className="lg:w-4/6 container mb-12 mt-8">
                            <p className="font-barlow mb-12">{props.data.content}</p>
                        </div>
                    </div>
            </section>
          
            )

}

export default DisplayProgramPost