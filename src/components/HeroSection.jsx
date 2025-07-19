import Search from "./Search.jsx";

const HeroSection = ({ searchTerm, setSearchTerm }) => {
    return (
        <header id="header">
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
                Find <span className="text-gradient">Movies</span>
                You'll Enjoy Without The Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
    );
};

export default HeroSection;
