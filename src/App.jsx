import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Header from '../components/Header';
import BubblesBackground from '../components/Bubbles';

import ContentProtector from '../components/ContentProtector';
import Home from '../pages/Home';
import ResidentialMain from '../pages/ResidentialMain';
import RegularCleaning from '../pages/Residential/RegularCleaning';
import DeepCleaning from '../pages/Residential/DeepCleaning';
import MoveCleaning from '../pages/Residential/MoveCleaning';
import PostConstruction from '../pages/Residential/PostConstruction';
import Commercial from '/pages/Commercial';
import EcoFriendly from '/pages/Eco-Friendly';
import Career from '../pages/Career';
import RuxFooter from '../components/Footer'

console.log("✅ App component is rendering...");

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log("🔄 Route changed:", location.pathname);
    setKey((prev) => prev + 1); // Force re-render
  }, [location]);

  return (
    <ContentProtector>
    <div className='App'>
      <BubblesBackground key={key} />  {/* 🔄 This forces it to re-render */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential" element={<ResidentialMain />} /> 
        <Route path="/regularCleaning" element={<RegularCleaning />} />
        <Route path="/deepCleaning" element={<DeepCleaning />} />
        <Route path="/moveCleaning" element={<MoveCleaning />} />
        <Route path="/postConstructionCleaning" element={<PostConstruction />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/ecoFriendly" element={<EcoFriendly />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <RuxFooter />
    </div>
    </ContentProtector>
  );
}


export default App;

