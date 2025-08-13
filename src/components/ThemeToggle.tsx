import React, { useEffect } from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4 py-6 flex items-center justify-end">
      <button
        className="px-2 py-2 border-2 border-amber-200 dark:border-blue-800 rounded-full"
        onClick={() => {
          toggleTheme();
          setIsDark(!isDark);
        }}
        aria-label="Toggle theme"
      >
        {isDark ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeToggle;
