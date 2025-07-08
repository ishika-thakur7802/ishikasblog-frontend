import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [mode, setMode] = useState(() => {
        // Load from localStorage or default to 'dark'
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.body.className = mode;
        localStorage.setItem("theme", mode); // Save mode on change
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button className="toggle-btn" onClick={toggleMode}>
            {mode === "dark" ? "🌞" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
