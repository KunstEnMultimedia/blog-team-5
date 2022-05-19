import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import DisplayPosts from './DisplayPosts';

const ReturnPosts = (props) => {

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
                if (i < 9 && jsonData.posts.length >= 9){
                    return <DisplayPosts data={data} key={i} index={i} setProfileId={props.setProfileId}/>   
                } else if (jsonData.posts.length < 9){
                    return <DisplayPosts data={data} key={i} index={i} setProfileId={props.setProfileId}/> 
                }
            })
        }
    }
   
    return (<section className="container mx-auto  flex flex-wrap justify-evenly">
            <nav className="h-28 w-screen flex justify-center items-center">
                <h1 className="text-pink text-heading3 font-bold w-1/6 midMax:w-full midMax:text-center">ACTUEEL</h1>
            </nav>
            {returnData()}
            <div className="w-full h-44 flex justify-center items-center">
                <Link to="/nieuws"><button className="w-52 h-12 bg-pink rounded-md font-barlow">LEES MEER</button></Link>              
            </div>
        </section>)
    
    
}

export default ReturnPosts