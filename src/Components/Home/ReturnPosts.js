import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import DisplayPosts from './DisplayPosts';

const ReturnPosts = (props) => {

    const [jsonData, setJsonData] = useState('');

    // const getData=()=>{
    //     fetch('mock-blog.json'
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
        const response = await fetch("https://admin.impresshub.nl/api/blog-posts?populate=*");
        const data = await response.json();
        setJsonData(data);
    }

    useEffect(()=>{
        getData()
    },[])

    const returnData = () => {
       
        if (jsonData.data != null){
            return jsonData.data.map((data, i) => { 
                if(data.attributes.Category.Category == 'Post'){
                if (i < 9 && jsonData.data.length >= 9){
                    return <DisplayPosts data={data} key={i} index={i} setProfileId={props.setProfileId}/>   
                } else if (jsonData.data.length < 9){
                    return <DisplayPosts data={data} key={i} index={i} setProfileId={props.setProfileId}/> 
                }
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