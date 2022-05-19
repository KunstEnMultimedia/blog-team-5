import { useState } from "react";
import { Link } from "react-router-dom";
import DisplaySearch from "./DisplaySearch";
import Hamburger from "./Hamburger";
import './Hamburger.css';

const NavBar = () => {

    const [displaySearch, setDisplaySearch] = useState(false);
    const [hamburgerIcon, setHamburgerIcon] = useState(false);

    return (<>
        <nav className="flex flex-row justify-between h-28 container mx-auto static">
            <h1 className="text-pink text-heading3 font-barlow font-bold w-3/12 self-center flex"><Link to="/">THE BLOG</Link></h1>
            <div className="font-barlow font-medium text-heading7 w-5/12 flex justify-between flex-row self-center items-center lgMax:hidden">
                <Link to="/">HOME</Link>
                <Link to="/info">INFO</Link>
                <Link to="/nieuws">NIEUWS</Link>
                <Link to="/programma">PROGRAMMA</Link>
                <Link to="/">CONTACT</Link>
                <img className="bg-searchIcon h-8 w-8 bg-no-repeat bg-cover static border-hidden" onClick={() => setDisplaySearch(!displaySearch)} displaySearch={displaySearch}/>
                {displaySearch && <DisplaySearch setDisplaySearch={setDisplaySearch} displaySearch={displaySearch}/>}
            </div>
            <div className="lg:hidden flex justify-center self-center w-3/12 flex-col">
                <img className="bg-hamIcon h-10 w-12 bg-cover bg-no-repeat searchicon" onClick={() => setHamburgerIcon(!hamburgerIcon)}/>
            </div>
        </nav>
        {hamburgerIcon && <Hamburger hamburgerIcon={hamburgerIcon} setHamburgerIcon={setHamburgerIcon}/>}
        </>
    )
}

export default NavBar;