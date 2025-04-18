import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [systemDarkMode, setSystemDarkMode] = useState(false);

    // Check for user's preferred color scheme
    useEffect(() => {
        const isDarkMode =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        setSystemDarkMode(isDarkMode);

        // Only set the initial theme based on system preference if not already set by user
        if (localStorage.getItem("theme") === null) {
            setDarkMode(isDarkMode);
            document.documentElement.classList.toggle("dark-mode", isDarkMode);
        } else {
            const savedTheme = localStorage.getItem("theme") === "dark";
            setDarkMode(savedTheme);
            document.documentElement.classList.toggle("dark-mode", savedTheme);
        }

        // Listen for changes in color scheme preference
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            setSystemDarkMode(e.matches);
            // Only update theme if user hasn't manually set it
            if (localStorage.getItem("theme") === null) {
                setDarkMode(e.matches);
                document.documentElement.classList.toggle(
                    "dark-mode",
                    e.matches
                );
            }
        };
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Toggle dark/light mode
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.documentElement.classList.toggle("dark-mode", newDarkMode);
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");

        // Show toast if there's a mismatch between system and selected theme
        if (newDarkMode !== systemDarkMode) {
            toast.info(
                `You've selected ${
                    newDarkMode ? "dark" : "light"
                } mode while your system is in ${
                    systemDarkMode ? "dark" : "light"
                } mode.`,
                { position: "bottom-right", autoClose: 4000 }
            );
        }
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header ${darkMode ? "dark-mode" : ""}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#hero">AT</a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                    ></span>
                </button>

                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav-list">
                        <li>
                            <a href="#about" onClick={() => setMenuOpen(false)}>
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={() => setMenuOpen(false)}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    className={`theme-toggle ${
                        darkMode ? "dark-mode" : "light-mode"
                    }`}
                    onClick={toggleTheme}
                    aria-label={
                        darkMode
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                    title={
                        darkMode
                            ? "Currently in dark mode"
                            : "Currently in light mode"
                    }
                >
                    <span className="theme-icon">{darkMode ? "☀️" : "🌙"}</span>
                    <span className="theme-label">
                        {darkMode ? "Light" : "Dark"}
                    </span>
                </button>
                <ToastContainer
                    position="bottom-right"
                    theme={darkMode ? "dark" : "light"}
                />
            </div>
        </header>
    );
};

export default Header;
