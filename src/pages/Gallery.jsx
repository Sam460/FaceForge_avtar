// Gallery.jsx
import React from 'react';
import { useAvatar } from '../components/AvatarContext';

const Gallery = () => {
  const { history, setAvatarUrl } = useAvatar();

  return (
    <div className="gallery-page">
      <h2>🖼️ Avatar Gallery</h2>
      <div className="gallery-grid">
        {history.length === 0 ? (
          <p>No avatars saved in history yet.</p>
        ) : (
          history.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Avatar ${index}`}
              width="100"
              height="100"
              onClick={() => setAvatarUrl(url)}
              className="gallery-avatar"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;