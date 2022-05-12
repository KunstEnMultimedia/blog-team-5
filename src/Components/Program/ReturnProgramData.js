import {useState, useEffect} from 'react'
import DisplayBigPost from './DisplayBigPost';

import DisplayProgramData from "./DisplayProgramData";

const ReturnProgramData = (props) => {
    const [programData, setProgramData] = useState('');
    console.log(props.test)
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

    const randomGenerator = (arr , num = 1) => {
        const res = [];
        for (let i = 0; i < num; i++){
            const random = Math.floor(Math.random() * arr.length);
            res.push(arr[random]);
        }
        return res;
    }

    const returnData = () => {

        if (programData.program != null){
            return programData.program.map((data, i) => {
                return <DisplayProgramData data={data} key={i} index={i} setProgramId={props.setProgramId}/>   
            })
        }
    }

    const returnProgramPost = () => {
        if(programData.program != null){
            let BigPost = randomGenerator(programData.program , 1);
            return BigPost.map((data, i) => {
                return <DisplayBigPost data={data} key={i} setProgramId={props.setProgramId}/>
            })
        }
    }

    return <section className="flex justify-between w-full grid grid-cols-2 container mx-auto">
        <section className="overflow-y-auto col-span-1 h-80vh scrollbar-hide">
            {returnData()}
        </section>
        <section className="col-span-1 h-80vh ">
            {returnProgramPost()}
        </section>
    </section>

}

export default ReturnProgramData