import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { CarouselHome } from "../../Components/CarouselHome/CarouselHome"
import { ButtonsLoginRegister } from "../../Components/ButtonsLoginRegister/ButtonsLoginRegister"


export const HomePage = () =>{
    return(<div className="HomePage">
        <Header/>
        <CarouselHome/>
        <ButtonsLoginRegister/>
       <Footer/>
    </div>)
}