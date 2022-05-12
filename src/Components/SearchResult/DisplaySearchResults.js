import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DisplaySearchResults = (props) => {

    const host = 'http://188.166.200.41';
    const date = props.data.attributes.publishedAt.split("T");
    let link;

    if (props.data.attributes.Category.Category == 'Event'){
        link = '/programma_post'
    } else {
        link = '/profile'
    }

    const linkTo = () => {
        if (props.data.attributes.Category.Category == 'Event'){
            props.setProgramId(props.data.id)
        } else {
            props.setProfileId(props.data.id)
        }
    }

    return <div className="bg-white h-56 mb-5 flex 2xl:w-11/12 w-12/12">
        <img src={host + props.data.attributes.Thumbnail.data.attributes.url} className="object-cover w-2/6 h-full"/>
        <Link to={link} onClick={linkTo()} className="flex flex-col justify-evenly w-7/12 mx-auto">
            <div>
                <h1 className="font-barlow font-bold text-heading4">{props.data.attributes.Title}</h1>
                <div className="flex flex-row gap-3">
                    <p className="text-pink font-bold font-barlow w-4/6">{props.data.attributes.Category.Study}</p> 
                    <p className="font-barlow">{date[0]}</p>
                </div>
            </div>
            <p className="hover:text-blue">{props.data.attributes.Description}</p>
            </Link>                   
    </div>
}

export default DisplaySearchResults