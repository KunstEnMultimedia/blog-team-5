import { Link } from "react-router-dom"

const Hamburger = () => {
    return <div className="container mx-auto flex justify-end font-barlow mb-10">
        <div className="flex flex-col w-9/12 text-right justify-around container mx-auto h-44">
        <Link to="/">HOME</Link>
        <Link to="/info">INFO</Link>
        <Link to="/nieuws">NIEUWS</Link>
        <Link to="/programma">PROGRAMMA</Link>
        <Link to="/">CONTACT</Link>
        </div>
    </div>
}

export default Hamburger