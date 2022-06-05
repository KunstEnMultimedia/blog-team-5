import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import DisplayPosts from './DisplayPosts';
import DisplayProgram from './DisplayProgram';

const Programma = (props) => {

    const [programData, setProgramData] = useState('');

    async function getData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-events?populate=*");
        const data = await response.json();
        setProgramData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {

        if (programData.data != null){
            return programData.data.map((data, i) => {
                if (i < 3 && programData.data.length >= 3){
                return <DisplayProgram data={data} key={i} index={i} setProgramId={props.setProgramId}/>   
                } else if (programData.data.length < 3){
                    return <DisplayProgram data={data} key={i} index={i} setProgramId={props.setProgramId}/>   
                }
            })
        }
    }

    return <section className="h-130 w-100 bg-blue flex justify-around flex-col">
        <header className="w-100 flex justify-center h-24 items-center">
            <Link to="/programma"><h1 className="font-bold font-barlow text-heading3 ">PROGRAMMA</h1></Link>
           
        </header>
        <section className="container mx-auto flex justify-between flex-col gap-3">
            {returnData()}
        </section>

        <div className="flex justify-center w-100 h-24 items-center">
            <Link to="/programma"><button className="w-52 h-12 bg-pink rounded-md font-barlow">BEKIJK MEER</button></Link>   
        </div>
    </section>
}

export default Programma