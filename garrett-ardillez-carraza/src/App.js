//stylo
import './App.css';
//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { HomePage } from './Pages/Home/HomePage';
import { RegisterPage } from './Pages/Register/RegisterPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
       
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;


/* <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Perfil" element={<PerfilPage />}></Route>
        <Route path="/Store" element={<StorePage />}></Route>*/