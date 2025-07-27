// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AvatarGenerator from './components/AvatarGenerator';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import './styles/PagesStyles.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <Link to="/">🏠 Home</Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/gallery">🖼️ Gallery</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AvatarGenerator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
