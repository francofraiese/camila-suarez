import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About';
import Curriculum from './components/Curriculum/Curriculum';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Curriculum/>
      <Contacto/>
    </div>
  );
}

export default App;
