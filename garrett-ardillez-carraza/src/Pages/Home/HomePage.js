import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { CarouselHome } from "../../Components/CarouselHome/CarouselHome"


export const HomePage = () =>{
    return(<div className="HomePage">
        <Header/>
        <CarouselHome/>
       <Footer/>
    </div>)
}