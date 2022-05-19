import NavBar from "../Home/NavBar"
import ProgramPost from "./ProgramPost"
import RecommendedProgram from "./RecommendProgram"
import { useEffect } from "react"

const ProgramPostPage = (props) => {

    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
      },[props.programId]);

    return <>
        <NavBar/>
        <ProgramPost programId={props.programId} setProgramId={props.setProgramId}/>
        <RecommendedProgram propgramId={props.programId} setProgramId={props.setProgramId}/>
    </>
}

export default ProgramPostPage