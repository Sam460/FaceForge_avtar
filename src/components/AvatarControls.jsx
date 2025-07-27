// AvatarControls.jsx
import React from 'react';
import { useAvatar } from './AvatarContext';
import '../styles/AvatarControlsStyles.css';


const AvatarControls = () => {
  const {
    style,
    setStyle,
    styles,
    gender,
    setGender,
    eyes,
    setEyes,
    hair,
    setHair,
    bgColor,
    setBgColor,
    seed,
    setSeed,
    getRandomSeed,
    downloadPNG,
    copyUrl,
  } = useAvatar();

  return (
    <div className="controls">
      <label>Style:</label>
      <select onChange={(e) => setStyle(e.target.value)} value={style}>
        {styles.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <div className="style-preview">
        {styles.map((s) => (
          <img
            key={s}
            src={`https://api.dicebear.com/7.x/${s}/svg?seed=preview`}
            alt={s}
            width="50"
            height="50"
            onClick={() => setStyle(s)}
            className={style === s ? 'selected' : ''}
          />
        ))}
      </div>

      <label>Gender:</label>
      <select onChange={(e) => setGender(e.target.value)} value={gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Eyes:</label>
      <select value={eyes} onChange={(e) => setEyes(e.target.value)}>
        <option value="variant01">Variant 01</option>
        <option value="variant02">Variant 02</option>
        <option value="variant03">Variant 03</option>
      </select>

      <label>Hair:</label>
      <select value={hair} onChange={(e) => setHair(e.target.value)}>
        <option value="short01">Short 01</option>
        <option value="short02">Short 02</option>
        <option value="long01">Long 01</option>
      </select>

      <label>Background:</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <label>Seed:</label>
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />

      <button onClick={getRandomSeed}>🎲 Random Avatar</button>
      <button onClick={downloadPNG}>🖼️ Download PNG</button>
      <button onClick={copyUrl}>🔗 Share Avatar</button>
    </div>
  );
};

export default AvatarControls;