import logo from './logo.svg';
import './styles/App.css';
import LandingPage from './LandingPage';
import MainPinboard from './MainPinboard';
import Favorites from './Favorites';
import { Route, Routes, Link } from "react-router-dom"

// Main app page with Links to routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPinboard />} />
      <Route path="/favorites" element={<Favorites />} />


      </Routes>
  );
}

export default App;
