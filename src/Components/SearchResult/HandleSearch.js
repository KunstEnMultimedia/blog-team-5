import { useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import DisplaySearchResults from './DisplaySearchResults';

const HandleSearch = ({setProfileId ,setProgramId , filterBlog, filterProgram}) => {

    const location = useLocation();
    const val = location.state;

    const [jsonData, setJsonData] = useState('');
  
    async function getData(){
        const response = await fetch("http://188.166.200.41/api/blog-posts?populate=*");
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
        if (jsonData.data != null && val != null){
            return jsonData.data.map((data, i ) => {
                console.log(data);
                var split = data.attributes.Title.toLowerCase().split(" ");
                if (split.includes(val.toLowerCase())){
                    if (!filterBlog && !filterProgram){
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    } else if (filterBlog && !filterProgram){
                        if (data.attributes.Category.Category == 'Post')
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    } else if (filterProgram && !filterBlog){
                        if (data.attributes.Category.Category == 'Event')
                        return <DisplaySearchResults data={data} key={i} setProfileId={setProfileId} setProgramId={setProgramId}/>
                    }
                } else {
                    if (i < 1){
                        
                        return <h1 className="font-barlow text-heading6">Er waren geen zoekresulaten... Probeer het nog eens</h1>
                    }
                }
            })
        }
    }
    

    return <>
    {returnData() != null ? returnData() : <h1 className="font-barlow text-heading6"> Er waren geen zoekresulaten... Probeer het nog eens</h1> }
    </>
}
export default HandleSearch