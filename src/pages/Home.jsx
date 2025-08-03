// src/pages/Home.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
// We no longer need to import Search here

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (query) => {
        if (query) {
            navigate("/all-movies", { state: { initialSearch: query } });
        }
    };

    return (
        <main>
            <div className="pattern" />
            {/* Remove the extra Search component and pass props to HeroSection */}
            <HeroSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearchSubmit={handleSearch}
            />
        </main>
    );
};

export default Home;
