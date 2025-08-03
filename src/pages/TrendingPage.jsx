// src/pages/TrendingPage.jsx

import { useState, useEffect } from "react";
import TrendingSection from "../components/TrendingSection";
import { getTrendingMovies } from "../appwrite.js";

const TrendingPage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isTrendingLoading, setIsTrendingLoading] = useState(false);
    const [trendingError, setTrendingError] = useState("");

    // Load trending movies
    useEffect(() => {
        const loadTrendingMovies = async () => {
            setIsTrendingLoading(true);
            setTrendingError("");
            try {
                const movies = await getTrendingMovies();
                setTrendingMovies(movies);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
                setTrendingError("Failed to load trending movies.");
            } finally {
                setIsTrendingLoading(false);
            }
        };

        loadTrendingMovies();
    }, []);

    return (
        <div className="wrapper w-full px-5 xs:px-10">
            <TrendingSection
                trendingMovies={trendingMovies}
                isTrendingLoading={isTrendingLoading}
                trendingError={trendingError}
            />
        </div>
    );
};

export default TrendingPage;
