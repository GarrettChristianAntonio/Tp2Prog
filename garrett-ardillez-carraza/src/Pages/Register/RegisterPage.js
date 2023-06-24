import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { FormRegister } from "../../Components/FormRegister/FormRegister";

import "./RegisterPage.css"

export const RegisterPage = () =>{
    return(<div className="RegisterPage"> 
        <Header/>
        <FormRegister/>
        <Footer/>
    </div>)
}