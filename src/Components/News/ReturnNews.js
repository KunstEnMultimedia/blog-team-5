import DisplayNews from "./DisplayNews";
import { useState, useEffect } from "react";
import './button.css';

const ReturnNews = (props) => {


    let postsDisplayed = 6;
    const [page, setPage] =  useState(1);
    const [postNumber, setPostNumber] = useState(postsDisplayed);

    localStorage.setItem('postnumber' , postNumber);
    localStorage.setItem('page' , page);

    // const [jsonData, setJsonData] = useState('');

    // async function getData(){
    //     const response = await fetch("http://188.166.200.41/api/blog-posts?populate=*");
    //     const data = await response.json();
    //     setJsonData(data);
    // }

    // useEffect(()=>{
    //     getData()
    // },[])

    // const returnData = () => {
    //     if (jsonData.data != null){
    //         return jsonData.data.map((data, i ) => {
    //             return <DisplayNews data={data} key={i}/>
    //         })
    //     }
    // }
    
    
    // return <>{returnData()}</>

    const [jsonData, setJsonData] = useState('');

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
        .then(function(myJson) {setJsonData(myJson)});

    }

    
    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
       
        if (jsonData.posts != null){
            return jsonData.posts.map((data, i) => { 
                if (i < postNumber && i >= postNumber - postsDisplayed){
                    return <DisplayNews data={data} key={i} index={i} setProfileId={props.setProfileId}/>   
                }
            })
        }
    }

    if (jsonData.posts != null){
        var lastPage = jsonData.posts.length;
        if ((lastPage/postsDisplayed) % 2 == 0){
            lastPage/=postsDisplayed
        }else {
            lastPage = Math.round((lastPage/postsDisplayed))
        }
    }
   
    return <section className="f">
        <div className="container mx-auto flex flex-wrap justify-evenly">
            {returnData()}
        </div>
       
        <div className="w-full flex justify-center gap-5 h-20 items-center font-montserrat text-heading4 font-bold text-pink">
            <button disabled={page==1} onClick={() => (setPostNumber(postNumber - postsDisplayed) , setPage(page-1))} className="font-bold buttondisabled" >&#x2190; VORIGE</button>
            <h1 className="mx-1">{page}/{lastPage}</h1>
            <button disabled={page==lastPage} onClick={() => (setPostNumber(postNumber + postsDisplayed) , setPage(page + 1))} className="font-bold buttondisabled">VOLGENDE &#x2192;</button>
        </div>
    </section>
}

export default ReturnNews