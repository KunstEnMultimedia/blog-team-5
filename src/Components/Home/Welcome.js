import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Welcome = () => {
    return (
        <section className=" bg-homeImg h-screen w-100 bg-no-repeat flex flex-col items-center bg-cover">
            <NavBar/>
            <div className="h-4/6 lg:w-3/4 flex flex-col items-center justify-end">
                <h1 className="font-barlow text-blue text-heading2 font-bold mb-2 text-center mdMax:text-heading3">HET VETERSTRIK CONCERT</h1>
                <p className="font-barlow w-4/6  text-center mb-3">Een popconcert voor iedereen die al kan veterstrikken. Of het nog moet leren. Het optreden van een klein uur staat bol van oude, bekende kinderliedjes als Op een grote paddenstoel en In een groen knollenland.</p>
                <Link to="/"><button className="w-52 h-12 bg-pink rounded-md font-barlow">LEES MEER</button></Link>              
            </div>
           
        </section>
    )
}

export default Welcome