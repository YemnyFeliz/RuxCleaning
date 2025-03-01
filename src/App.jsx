import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'; // FIXED: Corrected import path
import BubblesBackground from '../components/Bubbles'; // FIXED: Corrected import path

console.log("✅ App component is rendering...");

function App() {
  return (
    <div className='App'>
      <BubblesBackground key={Math.random()}/>
      <Header />
    </div>
  );
}

export default App;
