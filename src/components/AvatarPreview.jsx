// AvatarPreview.jsx
import React from 'react';
import { useAvatar } from './AvatarContext';
import '../styles/AvatarPreviewStyles.css';


const AvatarPreview = () => {
  const { zoom, avatarRef, avatarUrl, loading, setZoom } = useAvatar();

  return (
    <div className="avatar-preview" style={{ transform: `scale(${zoom})` }} ref={avatarRef}>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <img src={avatarUrl} alt="Avatar" width="200" height="200" />
      )}
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={zoom}
        onChange={(e) => setZoom(e.target.value)}
        className="zoom-slider"
      />
    </div>
  );
};

export default AvatarPreview;
