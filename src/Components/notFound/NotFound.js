import { Link } from "react-router-dom"

const page404 = () => {
    return <section className="bg-404Icon h-screen w-full bg-no-repeat bg-cover flex justify-center items-center">
        <div className="container mx-auto flex items-end justify-center h-3/5 ">
        <div className="flex flex-col font-barlow w-2/4 justify-center items-center ">
            <h1 className="text-white text-heading1 font-bold">Oops...</h1>
            <h2 className="text-white font-bold text-heading3 mt-1 text-center">404 - Pagina niet gevonden</h2>
            <p className="text-white text-paragraphL w-10/12 text-center mt-1 smMax:w-full">Momenteel is de pagina niet beschikbaar.
                Excuses voor het ongemak.</p>

                <div className="pt-8">
                    <Link to="/"><button className="bg-white h-10 w-40 rounded-lg">Terug naar home</button></Link>
                </div>

        </div>
        </div>
    </section>
}

export default page404