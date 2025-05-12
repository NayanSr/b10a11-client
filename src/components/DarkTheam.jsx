import React, { useEffect, useState } from 'react';

const DarkTheam = () => {
     const [darkMode, setDarkMode] = useState(false)
 useEffect(() => {
    // Check for saved preference or system preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
    document.documentElement.classList.toggle('dark', newMode)
  }
    return (
         <button 
      onClick={toggleDarkMode}
      className="py-1 px-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
    );
};

export default DarkTheam;