import NavBar from "../Home/NavBar"
import ReturnProgramData from "./ReturnProgramData"

const ProgramPage = (props) => {

    return <section className="bg-creme h-screen">
        <NavBar/>
        <ReturnProgramData setProgramId={props.setProgramId}/>
    </section>
}

export default ProgramPage