import "./Header.css"
import { useLocation } from 'react-router-dom';

export const Header =() => {
    
    const location = useLocation()
    const isAbsolute = location.pathname === "/"

    return (<div className={`header ${isAbsolute ? 'absolute' : 'relative'}`}>
        <h1>CineFlixor</h1>
    </div>)
}