import DisplayNews from "./DisplayNews";
import { useState, useEffect } from "react";

const ReturnNews = () => {

    const [jsonData, setJsonData] = useState('');

    // const getData=()=>{
    //     fetch('http://188.166.200.41/api/blog-posts?populate=*'
    //     ,{
    //         headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //         }
    //     }
    //     )
    //     .then(function(response) {return (response.json())})
    //     .then(function(myJson) {setJsonData(myJson)});

    // }
    async function getData(){
        const response = await fetch("http://188.166.200.41/api/blog-posts?populate=*");
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
        if (jsonData.data != null){
            return jsonData.data.map((data, i ) => {
                return <DisplayNews data={data} key={i}/>
                    // if (data.attributes.Category.Category == 'Event'){
                    //     return <DisplayNews data={data} key={i}/>
                    // }
            })
        }
    }
    

    return <>{returnData()}</>
}

export default ReturnNews