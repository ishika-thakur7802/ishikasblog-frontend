import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeToggle;