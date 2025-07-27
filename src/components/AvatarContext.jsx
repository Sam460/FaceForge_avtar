// AvatarContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [style, setStyle] = useState('adventurer');
  const [seed, setSeed] = useState('samrat');
  const [bgColor, setBgColor] = useState('#b6e3f4');
  const [gender, setGender] = useState('male');
  const [eyes, setEyes] = useState('variant01');
  const [hair, setHair] = useState('short01');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('avatar-history')) || []);

  const styles = ['adventurer', 'bottts', 'pixel-art', 'avataaars'];

  // Define supported traits per style
  const supportedTraits = {
    adventurer: ['gender', 'eyes', 'hair'],
    bottts: [],
    'pixel-art': [],
    avataaars: [],
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      let url = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=${bgColor.slice(1)}`;
      const traits = supportedTraits[style] || [];

      if (traits.includes('gender')) url += `&gender=${gender}`;
      if (traits.includes('eyes')) url += `&eyes=${eyes}`;
      if (traits.includes('hair')) url += `&hair=${hair}`;

      setAvatarUrl(url);
      setHistory(prev => {
        const updated = [url, ...prev.slice(0, 9)];
        localStorage.setItem('avatar-history', JSON.stringify(updated));
        return updated;
      });
      localStorage.setItem('profile-avatar', url);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [style, seed, bgColor, gender, eyes, hair]);

  const getRandomSeed = () => {
    const random = Math.random().toString(36).substring(7);
    setSeed(random);
  };

  const downloadPNG = async () => {
    const response = await fetch(avatarUrl);
    const svgBlob = await response.blob();
    const img = new Image();
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const link = document.createElement('a');
      link.download = `avatar-${seed}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    img.src = url;
  };

  const copyUrl = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?style=${style}&seed=${seed}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Shareable URL copied!');
  };

  return (
    <AvatarContext.Provider
      value={{
        style,
        setStyle,
        styles,
        seed,
        setSeed,
        bgColor,
        setBgColor,
        gender,
        setGender,
        eyes,
        setEyes,
        hair,
        setHair,
        zoom,
        setZoom,
        avatarUrl,
        loading,
        darkMode,
        setDarkMode,
        getRandomSeed,
        downloadPNG,
        copyUrl,
        history,
        setAvatarUrl
      }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);