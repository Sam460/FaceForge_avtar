// AvatarHistory.jsx
import React from 'react';
import { useAvatar } from './AvatarContext';
import '../styles/AvatarHistoryStyles.css';


const AvatarHistory = () => {
  const { history, setAvatarUrl } = useAvatar();

  return (
    <div className="avatar-history">
      <h3>🕓 Avatar History</h3>
      <div className="history-thumbnails">
        {history.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`avatar-${index}`}
            width="50"
            height="50"
            onClick={() => setAvatarUrl(url)}
            className="history-item"
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarHistory;
