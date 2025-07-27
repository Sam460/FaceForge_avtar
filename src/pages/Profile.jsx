// Profile.jsx
import React from 'react';
import { useAvatar } from '../components/AvatarContext';

const Profile = () => {
  const { avatarUrl } = useAvatar();

  return (
    <div className="profile-page">
      <h2>👤 Profile Avatar</h2>
      <img src={avatarUrl} alt="Profile Avatar" width={200} height={200} />
      <p>This avatar is currently saved as your profile picture.</p>
    </div>
  );
};

export default Profile;
