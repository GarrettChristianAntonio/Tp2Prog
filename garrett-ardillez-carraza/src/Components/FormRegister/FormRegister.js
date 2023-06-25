import { useState } from "react";
import "./FormRegister.css"






export const FormRegister = () =>{
    const [email,setMail] = useState("")
    const [password,setPassword] = useState("")
    const [names,setNames] = useState("")
    const [age,setAge] = useState(0)

    const validar = () =>{
       email === "hola@hola.com" ?alert("registro verde, se necesita aprender axio y realizar comparación si ya existe el mismo correo"): alert("aun no funciona")
    }

    return(
        <form className="Form" onSubmit={ev => {
            ev.preventDefault();
            
        }}>
            <h2>Register</h2>
            <div className="caja">
                <label className="label1">email</label>
                <input className="input1" type="email" name="mail" value={email} onChange={ev => setMail(ev.target.value)} />
            </div>
            <div className="caja">
                <label className="label1">password</label>
                <input className="input1" type="password" name="password" value={password} onChange={ev => setPassword(ev.target.value)} />
            </div>
            <div className="caja">
                <label className="label1">names</label>
                <input className="input1" type="text" name="names" value={names} onChange={ev => setNames(ev.target.value)} />
            </div>
            <div className="caja">
                <label className="label1">age</label>
                <input className="input1" type="number" name="age" value={age} onChange={ev => setAge(ev.target.value)} />
            </div>
            <div className="caja2">
                <button className="boton1" type="submit" onClick={validar}>Registrarse </button>
            </div>
        </form>)
}


    
    