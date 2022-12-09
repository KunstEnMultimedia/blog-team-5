import { useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import DisplaySearchResults from './DisplaySearchResults';

const HandleSearch = ({setProfileId ,setProgramId , filterBlog, filterProgram}) => {

    const location = useLocation();
    var val = location.state;

    if (val == null){
        val = localStorage.getItem('bigSearchResult');
    }
    
    localStorage.setItem('bigSearchResult' , val);
    var newVal = localStorage.getItem('bigSearchResult');
   
    var arr = [];
    newVal = newVal.toLowerCase();
    arr.push(newVal);

    const [blogData, setBlogData] = useState('');
    const [eventData, setEventData] = useState('');
  
    async function getData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-posts?populate=Author.Picture,Author.Class,Class,Thumbnail");
        const data = await response.json();
        data.data.forEach((data) => {
            data.attributes.type = "Blog";
        })
        setBlogData(data);
    }

    async function getEventData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-events?populate=*");
        const data = await response.json();
        data.data.forEach((data) => {
            data.attributes.type = "Event";
        })
        setEventData(data);
    }

    useEffect(()=>{
        getData();
        getEventData();
    },[])

    var mixedArr = [];

        if (blogData.data != null && val != null){
            blogData.data.forEach((data, i) => {
                var low = data.attributes.Title.toLowerCase();
                if (low.includes(arr)){
                    mixedArr.push(data);
                }
            })
        }

        if (eventData.data != null && val != null){
            eventData.data.forEach((data, i) => {
                var low = data.attributes.Title.toLowerCase();
                if (low.includes(arr)){
                    mixedArr.push(data);
                }
            })
        }

        const returnData = () => {
        if (mixedArr != null){
            return mixedArr.map((data, i ) => {
                    if (!filterBlog && !filterProgram){
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    } 
                    else if (filterBlog && !filterProgram){
                        if (data.attributes.type == 'Blog')
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    } else if (filterProgram && !filterBlog){
                        if (data.attributes.type == 'Event')
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    }
            })
        }
    }

    return <>
    {returnData()}
    </>
}
export default HandleSearch