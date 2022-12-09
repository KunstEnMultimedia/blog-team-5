import DisplayProfile from "./DisplayProfile";
import { useState, useEffect } from "react";
import Recommended from "./Recommended";


const ReturnProfile = (props) => {
    
    const [profileData, setProfileData] = useState('');
    
    const getData=()=>{
        fetch('https://admin.impresshub.nl/api/blog-posts?populate=*',{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }).then(function(response) {return (response.json())})
        .then(function(myJson) {setProfileData(myJson)});
    
        }
    
        useEffect(()=>{
            getData()
        },[])
        
        const returnData = () => {
            if (profileData.data != null){
                return profileData.data.map((data, i) => {
                    console.log(data.id)
                    if(localStorage.getItem('personProfile') == data.id){
                        return <DisplayProfile data={data} key={i} setProfileId={props.setProfileId}/>
                    }
                })
            }
        }

        return (<>
        {returnData()}
        </>)
}

export default ReturnProfile