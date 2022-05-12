import { useState } from "react";
import { Link } from "react-router-dom";
import DisplaySearch from "./DisplaySearchBar";


const NavBar = () => {

    const [displaySearch, setDisplaySearch] = useState(false);
    // const [searchInput, setSearchInput] = useState('');

    return (
        <nav className="flex flex-row justify-between h-28 container mx-auto static">
            <h1 className="text-pink text-heading3 font-barlow font-bold w-3/12 self-center flex"><Link to="/">THE BLOG</Link></h1>
            <div className="font-barlow font-medium text-heading7 w-5/12 flex justify-between flex-row self-center items-center mdMax:hidden">
                <Link to="/">HOME</Link>
                <Link to="/info">INFO</Link>
                <Link to="/nieuws">NIEUWS</Link>
                <Link to="/programma">PROGRAMMA</Link>
                <Link to="/">CONTACT</Link>
                <img className="bg-searchIcon h-8 w-8 bg-no-repeat bg-cover static border-none" onClick={() => setDisplaySearch(!displaySearch)} displaySearch={displaySearch}/>
                {displaySearch && <DisplaySearch setDisplaySearch={setDisplaySearch} displaySearch={displaySearch}/>}
            </div>

  
 

        </nav>
    )
}

export default NavBar;