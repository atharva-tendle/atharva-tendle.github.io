import { useState, useEffect } from "react";
import "./App.css";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
// import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Check for user's preferred color scheme
    useEffect(() => {
        const isDarkMode =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle("dark-mode", isDarkMode);

        // Listen for changes in color scheme preference
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            setDarkMode(e.matches);
            document.documentElement.classList.toggle("dark-mode", e.matches);
        };
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <div className={`app ${darkMode ? "dark-mode" : ""}`}>
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                {/* <Projects /> */}
                <Publications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
