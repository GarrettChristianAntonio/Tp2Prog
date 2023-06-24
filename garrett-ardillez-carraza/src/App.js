import './App.css';
import { Header } from "./Components/Header/Header.js"
import { Footer } from './Components/Footer/Footer';
import { Container } from './Components/Container/Container';


function App() {
  return (
    <div className="App">
    <Header/>
    <Container/>
    <Footer/>
    </div>
  );
}

export default App;
