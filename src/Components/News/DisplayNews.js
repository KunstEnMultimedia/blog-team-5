const DisplayNews = (props) => {
    
    const host = "http://188.166.200.41";
    
    return <div>
        <h1>{props.data.attributes.Title}</h1>
        <h1>{props.data.id}</h1>
        <img src={host + props.data.attributes.Thumbnail.data.attributes.url}/>
    </div>
}

export default DisplayNews