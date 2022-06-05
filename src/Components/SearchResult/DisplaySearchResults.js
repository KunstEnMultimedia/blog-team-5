import { Link, useLocation } from 'react-router-dom';

const DisplaySearchResults = (props) => {

    const host = 'https://admin.impresshub.nl';
    // const date = props.data.attributes.publishedAt.split("T");
    let text = props.data.attributes.Description;


    if (text.length > 192){
        text = text.slice(0,192) + "...";
    }

    let link;
    let thumbnail;
    let category;

    if (props.data.attributes.type == 'Event'){
        link = '/programma_post'
        thumbnail = host + props.data.attributes.Image.data.attributes.formats.thumbnail.url
        category =  category = props.data.attributes.Type
    } else {
        link = '/profile'
        thumbnail = host + props.data.attributes.Thumbnail.data.attributes.url
        category = props.data.attributes.Category
    }

    const linkTo = () => {
        if (props.data.attributes.type == 'Event'){
            props.setProgramId(props.data.id)
        } else {
            props.setProfileId(props.data.id)
        }
    }

    return <div className="bg-white h-52 mb-5 flex 2xl:w-11/12 w-10/12 mdMax:flex-col mdMax:h-76 smMax:h-80">
        <img src={thumbnail} className="object-cover w-2/6 h-52 mdMax:w-full mdMax:h-2/4 smMax:h-3/4"/>
        <Link to={link} onClick={linkTo()} className="flex flex-col justify-evenly w-7/12 mx-auto mdMax:w-11/12">
            <div>
                <h1 className="font-barlow font-bold text-heading4 mdMax:text-heading5">{props.data.attributes.Title}</h1>
                <div className="flex flex-row gap-3">
                    <p className="text-pink font-bold font-barlow w-4/6">{category}</p> 
                    {/* <p className="font-barlow">{date[0]}</p> */}
                </div>
            </div>
            <p className="hover:text-blue mdMax:hidden mdMid:hidden">{text}</p>
            </Link>                   
    </div>

}

export default DisplaySearchResults