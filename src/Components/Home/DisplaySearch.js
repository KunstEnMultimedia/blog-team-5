import {useState} from 'react'
import { Link } from 'react-router-dom';

const DisplaySearch = ({setDisplaySearch , displaySearch}) => {

    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
      };

    return <section className="bg-blue opacity-90 min-h-screen w-screen absolute left-0 top-0 flex z-50">
        <div className="w-screen flex justify-between flex-col">
            <div className="justify-end flex container mt-5 mx-auto">
                <button onClick={() => {setDisplaySearch(!displaySearch)}} className="font-barlow text-black opacity-100 text-heading2 flex justify-end">x</button>
            </div>
        <form className="h-4/6 flex justify-center gap-4 flex-row w-screen">
            <input type="text" name="zoek" className="w-2/6 h-12 text-heading5  bg-blue rounded-sm border-b-4 border-pink text-black/[.60] placeholder:text-black placeholder:opacity-60 font-barlow" placeholder="Waar ben je naar op zoek?" onChange={handleChange}/>
            <Link to="/search" state={searchInput} ><button type="submit" className="w-24 bg-pink h-12 font-bold font-barlow text-heading5 text-blue" onClick={() => {setDisplaySearch(!displaySearch)}}>ZOEK</button></Link>
        </form>
        </div>
      
    </section>
}

export default DisplaySearch