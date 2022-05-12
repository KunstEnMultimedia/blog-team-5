import { Link } from "react-router-dom";
import NavBar from "../Home/NavBar"
import HandleSearch from "./HandleSearch"
import {useState} from 'react'

const SearchPage = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [filterProgram, setFilterProgram] = useState(false);
    const [filterBlog, setFilterBlog] = useState(false);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
      };

    return <section className="bg-creme h-screen">
        <NavBar/>
        <section className="flex flex-row  container mx-auto h-80vh">
        <section className="flex flex-col w-9/12 h-80vh ">
                <div className=" w-9/12 h-20 flex justify-start items-center gap-4">
                    <input type="text" className="h-2/4 w-6/12 border-b-4 border-pink font-barlow rounded-sm bg-creme text-heading6 placeholder:text-black" onChange={handleChange} placeholder="Zoeken.."/>
                    <Link to="/search" state={searchInput} className="h-2/4"><button type="submit" className="w-24 bg-pink h-full font-bold font-barlow text-heading6 text-creme">ZOEK</button></Link>
                </div>
                <div className="w-9/12 flex justify-start flex-col h-36rem overflow-y-auto">
                    <HandleSearch setProfileId={props.setProfileId} setProgramId={props.setProgramId} filterBlog={filterBlog} filterProgram={filterProgram}/>
                </div>
        </section>
        <section className="w-3/12">
            <div className="h-20 flex items-center">
                <h1 className="font-bold font-barlow text-heading4">FILTER:</h1>
            </div>
            <div className="flex flex-col items-start h-1/5 gap-3 justify-between w-full">
                <Link to="/search" className="h-16 w-6/12" state={searchInput}><button className="h-full w-full font-barlow text-creme font-bold text-heading6 bg-pink" style={filterProgram ? {background : '#E05596', border : '5px solid #F27DB4'} : {background : '#F27DB4'}} onClick={() => {setFilterProgram(!filterProgram)}}>PROGRAMMA</button></Link>
                <Link to="/search"className="h-16 w-6/12" state={searchInput}><button className="h-full w-full bg-blue font-barlow text-creme font-bold text-heading6" style={filterBlog ? {background : '#1B84B2', border : '5px solid #04B1D9'} : {background : '#04B1D9'}} onClick={() => {setFilterBlog(!filterBlog)}}>BLOG</button></Link>
            </div>
        </section>
        </section>
    </section>
}

export default SearchPage