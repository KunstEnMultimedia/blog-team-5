import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { useState } from "react";
import Hamburger from "./Hamburger";
const Welcome = () => {
    return (
        <section className="h-screen w-100 ">
            <div className="bg-testimg h-screen w-100  bg-cover flex bg-creme mix-blend-soft-light ">
            
            </div>
            <div className="absolute top-0 w-screen"><NavBar/></div>
            <div className="h-4/6 lg:w-3/4 flex flex-col items-center justify-end top-20 left-40 absolute ml-4 mt-6 midMax:left-0">
                <h1 className="font-barlow text-blue text-heading2 font-bold mb-2 text-center mdMax:text-heading3">HET VETERSTRIK CONCERT</h1>
                <p className="font-barlow w-4/6  text-center mb-3">Een popconcert voor iedereen die al kan veterstrikken. Of het nog moet leren. Het optreden van een klein uur staat bol van oude, bekende kinderliedjes als Op een grote paddenstoel en In een groen knollenland.</p>
                <Link to="/"><button className="w-52 h-12 bg-pink rounded-md font-barlow">LEES MEER</button></Link>              
            </div>
        </section>
        // <section className=" bg-testimg mix-blend-soft-light bg-creme h-screen w-100 bg-no-repeat flex flex-col items-center bg-cover">
        //     <NavBar/>
            // <div className="h-4/6 lg:w-3/4 flex flex-col items-center justify-end">
            //     <h1 className="font-barlow text-blue text-heading2 font-bold mb-2 text-center mdMax:text-heading3">HET VETERSTRIK CONCERT</h1>
            //     <p className="font-barlow w-4/6  text-center mb-3">Een popconcert voor iedereen die al kan veterstrikken. Of het nog moet leren. Het optreden van een klein uur staat bol van oude, bekende kinderliedjes als Op een grote paddenstoel en In een groen knollenland.</p>
            //     <Link to="/"><button className="w-52 h-12 bg-pink rounded-md font-barlow">LEES MEER</button></Link>              
            // </div>
           
        // </section>
    )
}

export default Welcome