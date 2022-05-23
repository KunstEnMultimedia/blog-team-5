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

    const [jsonData, setJsonData] = useState('');
  
    async function getData(){
        const response = await fetch("https://admin.impresshub.nl/api/blog-posts?populate=*");
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
        if (jsonData.data != null && val != null){
            return jsonData.data.map((data, i ) => {
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
                }
            })
        }
    }
    

    return <>
    {returnData()}
    </>
}
export default HandleSearch