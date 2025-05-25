import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Header from '../components/Header';
import BubblesBackground from '../components/Bubbles';

import Home from '../pages/Home';
import ResidentialMain from '../Pages/ResidentialMain';
import RegularCleaning from '../Pages/Residential/RegularCleaning';
import DeepCleaning from '../Pages/Residential/DeepCleaning';
import MoveCleaning from '../Pages/Residential/MoveCleaning';
import PostConstruction from '../Pages/Residential/PostConstruction';
import Commercial from '/pages/Commercial';
import EcoFriendly from '/pages/Eco-Friendly';
import Career from '../Pages/Career';
import CallAction from '../pages/CallAction';
import RuxFooter from '../components/Footer'

console.log("✅ App component is rendering...");

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         {/* ✅ Ensure BubblesBackground is applied to ALL pages */}
//         <BubblesBackground />
//         <Header />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/regularCleaning" element={<RegularCleaning />} />
//           <Route path="/deepCleaning" element={<DeepCleaning />} />
//           <Route path="/moveCleaning" element={<MoveCleaning />} />
//           <Route path="/postConstructionCleaning" element={<PostConstruction />} />
//           <Route path="/commercial" element={<Commercial />} />
//           <Route path="/ecoFriendly" element={<EcoFriendly />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/callAction" element={<CallAction />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
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
        <Route path="/callAction" element={<CallAction />} />
      </Routes>

      <RuxFooter />
    </div>
  );
}


export default App;

