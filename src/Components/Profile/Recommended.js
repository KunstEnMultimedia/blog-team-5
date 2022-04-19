import { useState, useEffect } from "react";
import DisplayRecommended from "./DisplayRecommended";

const Recommended = (props) => {

    const [recData, setRecData] = useState('');
    
    const getData=()=>{
        fetch('mock-blog.json'
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
        if (recData.posts != null){
            
            let filteredArr = randomGenerator(recData.posts, 3);
            return filteredArr.map((data, i) => {

                return <DisplayRecommended data={data} key={i} setProfileId={props.setProfileId} index={data.id}/>                   
            })
        }
    }
    return (<section className="bg-blue">
        <div className="container mx-auto w-9/12 ">
        <h1 className="font-bold font-barlow text-heading3 w-full h-28 flex items-center">Lees meer blogs</h1>
            <div className="flex justify-between flex-row">
            {returnRecommended()}
            </div>
           
        </div>
        
    </section>)
}

export default Recommended