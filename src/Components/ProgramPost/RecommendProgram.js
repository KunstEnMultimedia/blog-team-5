import { useState, useEffect } from "react";
import DisplayRecProgram from "./DisplayRecProgram";

const RecommendedProgram = (props) => {
    const [recData, setRecData] = useState('');
    
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
        .then(function(myJson) {setRecData(myJson)});
    
        }
    
        useEffect(()=>{
            getData()
        },[])
    
    const randomGenerator = (arr , num = 3) => {
        const res = [];
        for (let i = 0; i < num; i++){
            const random = Math.floor(Math.random() * arr.length);
            res.push(arr[random]);
        }
        return res;
    }

    const returnRecommended = () => {
        if (recData.program != null){
            
            let filteredArr = randomGenerator(recData.program, 3);
            return filteredArr.map((data, i) => {
                return <DisplayRecProgram data={data} key={i} setProgramId={props.setProgramId} index={data.id}/>                   
            })
        }
    }
    return (<section className="bg-blue">
        <div className="container mx-auto w-9/12 ">
        <h1 className="font-bold font-barlow text-heading3 w-full h-28 flex items-center lgMax:flex-col text-center">Bekijk meer events</h1>
            <div className="flex justify-between flex-row lgMax:flex-col lgMax:items-center">
            {returnRecommended()}
            </div>
           
        </div>
        
    </section>)
}

export default RecommendedProgram