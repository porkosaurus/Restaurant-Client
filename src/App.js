import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHeader from './components/home-header/home-header';
import Navbar from './components/navbar/navbar';
import Gallery from './components/gallery/gallery'
import BottomCurve from './components/bottom-curve/bottom-curve';
import TopCurve from './components/top-curve/top-curve';
import Home from './routes/home/home';
import Menu from './routes/menu/menu';
import Comida from './routes/comida/comida'
import Contact from './routes/contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/food' element={<Comida/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
