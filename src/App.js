import About from './components/About'
import Contect from './components/Contect'
import Home from './components/Home'
import Service from './components/Service'
import Navbar from './Navbar'
import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <>
   <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
