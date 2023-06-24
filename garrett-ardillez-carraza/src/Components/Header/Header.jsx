import "./Header.css"
import { useLocation } from 'react-router-dom';
import {Login} from "../Login/Login"
import React, { useState , useEffect } from "react"


export const Header =() => {
    
    


    const [renderizado, setRenderizado] = useState(false);

    const handleRenderizar = () => {
      setRenderizado(!renderizado);
    }

    useEffect(()=>{
        if (renderizado) {
            // Aplicar estilos cuando el botón esté presionado
            // Por ejemplo, establecer el borde
            document.getElementById('boton').style.border = '2px solid red';
          } else {
            // Restaurar estilos cuando el botón no esté presionado
            // Por ejemplo, eliminar el borde
            document.getElementById('boton').style.border = 'none';
          }
    },[renderizado])
    

    const location = useLocation()
    const isAbsolute = location.pathname === "/"

    return (<div>
    <div className={`header ${isAbsolute ? 'absolute' : 'relative'}`}>
        <div className="hwt"><h1 className="headerCineFlixor">CineFlixor</h1></div>
        <div className="buttons">
            <button id="boton" class="buttonCineFlixor" onClick={handleRenderizar}>Login</button><button class="buttonCineFlixor">Register</button>
           
        </div>
        
    </div>
    {renderizado && <Login />}
    </div>
    )
}