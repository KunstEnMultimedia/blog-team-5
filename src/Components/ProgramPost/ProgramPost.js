import DisplayProgramPost from "./DisplayProgramPost";
import { useState, useEffect } from "react";

const ProgramPost = (props) => {

    const [programData, setProgramData] = useState('');

    const getData=()=>{
        fetch('program-blog.json'
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
        if (programData.program != null){
        return programData.program.map((data, i ) => {
            if (localStorage.getItem('programId') == data.id){
                return <DisplayProgramPost data={data} key={i} setProgramData={props.setProgramData}/>
            }
        })
    }
    }

    return <>{ReturnPost()}</>
}

export default ProgramPost