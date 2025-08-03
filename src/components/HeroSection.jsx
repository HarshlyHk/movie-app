// src/components/HeroSection.jsx

import Search from "./Search.jsx";

// Restore the props this component needs to pass down to Search
const HeroSection = ({ searchTerm, setSearchTerm, onSearchSubmit }) => {
    return (
        <header id="header">
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
                Find <span className="text-gradient">Movies</span>
                You'll Enjoy Without The Hassle
            </h1>

            {/* The Search component now receives the functionality from the Home page */}
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearchSubmit={onSearchSubmit}
            />
        </header>
    );
};

export default HeroSection;
