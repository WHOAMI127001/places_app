import React, { useState } from 'react';

const Darkmode = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = '#ffffff'; 
    } else {
      document.body.style.backgroundColor = '#333333'; 
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? '☀️ Mode Clair' : '🌑 Mode Sombre'}
    </button>
  );
};

export default Darkmode;
