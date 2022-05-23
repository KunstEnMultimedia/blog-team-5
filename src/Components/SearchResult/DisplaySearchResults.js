import { Link, useLocation } from 'react-router-dom';

const DisplaySearchResults = (props) => {

    const host = 'https://admin.impresshub.nl';
    const date = props.data.attributes.publishedAt.split("T");
    let text = props.data.attributes.Description;


    if (text.length > 192){
        text = text.slice(0,192) + "...";
    }

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
                    <p className="text-pink font-bold font-barlow w-4/6">{props.data.attributes.Category.Category}</p> 
                    <p className="font-barlow">{date[0]}</p>
                </div>
            </div>
            <p className="hover:text-blue">{text}</p>
            </Link>                   
    </div>
}

export default DisplaySearchResults