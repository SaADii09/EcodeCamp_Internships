import React, { useState, useEffect } from "react";

function App() {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <div className="h-screen w-100 bg-white dark:bg-black flex justify-center items-center">
                <button
                    className="bg-green-200 p-4 rounded-3xl"
                    onClick={handleThemeSwitch}>
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </>
    );
}

export default App;
