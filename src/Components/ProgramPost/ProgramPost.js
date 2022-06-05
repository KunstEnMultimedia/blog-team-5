import DisplayProgramPost from "./DisplayProgramPost";
import { useState, useEffect } from "react";

const ProgramPost = (props) => {

    const [programData, setProgramData] = useState('');

    const getData=()=>{
        fetch('https://admin.impresshub.nl/api/blog-events?populate=*'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
        .then(function(response) {return (response.json())})
        .then(function(myJson) {setProgramData(myJson)});

    }

    useEffect(()=>{
        getData()
    },[])

    
    const ReturnPost = () => {
        if (programData.data != null){
        return programData.data.map((data, i ) => {
            if (localStorage.getItem('programId') == data.id){
                return <DisplayProgramPost data={data} key={i} setProgramData={props.setProgramData} programId={props.programId}/>
            }
        })
    }
    }

    return <>{ReturnPost()}</>
}

export default ProgramPost