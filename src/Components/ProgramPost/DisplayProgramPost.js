const DisplayProgramPost = (props) => {

    return <div>
                <h1>{props.data.title}</h1>
                <img src={props.data.thumbnail}/>
        </div>

}

export default DisplayProgramPost