// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useDebounce } from "react-use";

// NOTE: I'm removing the duplicate <Navbar/> import/component here
// because it is already rendered by the RootLayout.
import HeroSection from "../components/HeroSection.jsx";
import TrendingSection from "../components/TrendingSection";
import AllMoviesSection from "../components/AllMoviesSection";
import { getTrendingMovies, updateSearchCount } from "../appwrite.js";

// ... (API config remains the same)
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

const Home = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isTrendingLoading, setIsTrendingLoading] = useState(false);
    const [trendingError, setTrendingError] = useState("");

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

    useEffect(() => {
        if (location.state?.scrollTarget) {
            scroller.scrollTo(location.state.scrollTarget, {
                smooth: true,
                offset: -70,
                duration: 500,
            });
        }
    }, [location]);

    useEffect(() => {
        const fetchMovies = async (query = "") => {
            setIsLoading(true);
            setErrorMessage("");
            try {
                const endpoint = query
                    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
                          query
                      )}`
                    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
                const response = await fetch(endpoint, API_OPTIONS);
                if (!response.ok) throw new Error("Failed to fetch movies");
                const data = await response.json();
                if (data.Response === "False") {
                    setErrorMessage(data.Error || "No results.");
                    setMovieList([]);
                    return;
                }
                setMovieList(data.results || []);
                if (query && data.results.length > 0) {
                    await updateSearchCount(query, data.results[0]);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                setErrorMessage(
                    "Error fetching movies. Please try again later."
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies(debounceSearchTerm);
    }, [debounceSearchTerm]);

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
        <main>
            <div className="pattern" />

            {/* This section is now full-width because its container
                (main) is full-width and it's not in a padded wrapper. */}
            <HeroSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* This div now uses the modified wrapper class (for max-width and centering)
                AND we add horizontal padding back just for the content inside it. */}
            <div className="wrapper px-5 xs:px-10">
                <TrendingSection
                    trendingMovies={trendingMovies}
                    isTrendingLoading={isTrendingLoading}
                    trendingError={trendingError}
                />
                <AllMoviesSection
                    movieList={movieList}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                />
                <h1 className="text-white">{searchTerm}</h1>
            </div>
        </main>
    );
};

export default Home;
