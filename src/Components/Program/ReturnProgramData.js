import {useState, useEffect} from 'react'
import DisplayBigPost from './DisplayBigPost';

import DisplayProgramData from "./DisplayProgramData";

const ReturnProgramData = (props) => {
    
    const [programData, setProgramData] = useState('');

    async function getData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-events?populate=*");
        const data = await response.json();
        setProgramData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const randomGenerator = (arr, num = 1) => {
        const res = [];
        for (let i = 0; i < num; i++){
            const random = Math.floor(Math.random() * arr.length);
            res.push(arr[random]);
        }
        return res;
    }

    const returnData = () => {

        if (programData.data != null){
            return programData.data.map((data, i) => {
                return <DisplayProgramData data={data} key={i} index={i} setProgramId={props.setProgramId}/>   
            })
        }
    }

    const returnProgramPost = () => {
        if(programData.data != null){
            let BigPost = randomGenerator(programData.data , 1);
            return BigPost.map((data, i) => {
                return <DisplayBigPost data={data} key={i} setProgramId={props.setProgramId}/>
            })
        }
    }

    return <section className="flex justify-between w-full grid grid-cols-2 container mx-auto lgMax:grid-cols-1">
        <section className="overflow-y-auto col-span-1 h-80vh scrollbar-hide lgMax:col-span-1 lgMax:mt-10">
            {returnData()}
        </section>
        <section className="col-span-1 h-80vh lgMax:hidden">
            {returnProgramPost()}
        </section>
    </section>

}

export default ReturnProgramData