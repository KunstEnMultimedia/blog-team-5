import DisplayNews from "./DisplayNews";
import { useState, useEffect } from "react";
import './button.css';

const ReturnNews = (props) => {

    let postsDisplayed = 4;
    const [page, setPage] =  useState(1);
    const [postNumber, setPostNumber] = useState(postsDisplayed);

    const [jsonData, setJsonData] = useState('');

    async function getData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-posts?populate=Author.Picture,Author.Class,Class,Thumbnail");
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
        if (jsonData.data != null){
            return jsonData.data.map((data, i) => { 
                if (i < postNumber && i >= postNumber - postsDisplayed){
                    return <DisplayNews data={data} key={i} index={i} setProfileId={props.setProfileId}/>   
                }        
            })
        }
    } 

    if (jsonData.data != null){
        var lastPage = jsonData.data.length;
        console.log(lastPage/postsDisplayed);
        if (lastPage/postsDisplayed < 1){
            lastPage = Math.round((lastPage/postsDisplayed))
        }else{
            lastPage = Math.round((lastPage/postsDisplayed)) + 1;
            // console.log(lastPage);
        } 
    }
   
    return <section className="f">
        <div className="container mx-auto flex flex-wrap justify-evenly">
            {returnData()}
        </div>
       
        <div className="w-full flex justify-center gap-5 h-20 items-center font-montserrat text-heading4 font-bold text-pink">
            <button disabled={page<=1} onClick={() => (setPostNumber(postNumber - postsDisplayed) , setPage(page-1))} className="font-bold buttondisabled smMax:hidden" >&#x2190; VORIGE</button>
            <button disabled={page<=1} onClick={() => (setPostNumber(postNumber - postsDisplayed) , setPage(page-1))} className="font-bold buttondisabled sm:hidden" >&#x2190;</button>
            <h1 className="mx-1">{page}/{lastPage}</h1>
            <button disabled={page==lastPage} onClick={() => (setPostNumber(postNumber + postsDisplayed) , setPage(page + 1))} className="font-bold buttondisabled smMax:hidden">VOLGENDE &#x2192;</button>

            <button disabled={page==lastPage} onClick={() => (setPostNumber(postNumber + postsDisplayed) , setPage(page + 1))} className="font-bold buttondisabled sm:hidden">&#x2192;</button>
        </div>
    </section>
}

export default ReturnNews