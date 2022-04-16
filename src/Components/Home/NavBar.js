import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="flex flex-row justify-between h-28 container mx-auto static">
            <h1 className="text-pink text-heading3 font-barlow font-bold w-3/12 self-center flex"><Link to="/">THE BLOG</Link></h1>
            <div className="font-barlow font-medium text-heading7 w-5/12 flex justify-between flex-row self-center">
                <Link to="/">HOME</Link>
                <Link to="/">INFO</Link>
                <Link to="/posts">NIEUWS</Link>
                <Link to="/programma">PROGRAMMA</Link>
                <Link to="/">CONTACT</Link>
            </div>
        </nav>
    )
}

export default NavBar;