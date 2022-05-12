import DisplayProfile from "./DisplayProfile";
import { useState, useEffect } from "react";
import Recommended from "./Recommended";

const ReturnProfile = (props) => {
    
    const [profileData, setProfileData] = useState('');
    
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
        .then(function(myJson) {setProfileData(myJson)});
    
        }
    
        useEffect(()=>{
            getData()
        },[])
    
        const returnData = () => {
    
            if (profileData.posts != null){
    
                return profileData.posts.map((data, i) => {
                    if (localStorage.getItem('personProfile') == data.id){
                        return <DisplayProfile data={data} key={i}/>  
                    }
                })
            }
        }

        return (<>
        {returnData()}
        </>)
}

export default ReturnProfile