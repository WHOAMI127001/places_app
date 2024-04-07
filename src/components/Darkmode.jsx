import React, { useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = '#ffffff'; 
    } else {
      document.body.style.backgroundColor = '#29313d'; 
    }
  };

  return { isDarkMode, toggleDarkMode };
};

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={`rounded-full p-2 text-sm sm:text-base ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;