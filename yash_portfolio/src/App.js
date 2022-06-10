
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/projects' element={<Project />} />
        <Route path='/skills' element={<Skills/>} />

          
      </Routes>
    
    
   
      
    </div>
  );
}

export default App;
