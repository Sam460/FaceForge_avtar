// AvatarGenerator.jsx
import React from 'react';
import AvatarPreview from './AvatarPreview';
import AvatarControls from './AvatarControls';
import AvatarHistory from './AvatarHistory';
import { useAvatar } from './AvatarContext';
import '../styles/AvatarGenerator.css';

const AvatarGenerator = () => {
  const { darkMode, setDarkMode, history } = useAvatar();

  return (
    <div className={`avatar-app ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <h1>🎨 Avatar Generator</h1>
        <button className="toggle-dark" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <AvatarPreview />
      <AvatarControls />

      {history.length > 0 && <AvatarHistory />}
    </div>
  );
};

export default AvatarGenerator;
