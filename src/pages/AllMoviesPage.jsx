// src/pages/AllMoviesPage.jsx

import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import { useLocation } from "react-router-dom";

import Search from "../components/Search";
import AllMoviesSection from "../components/AllMoviesSection";
import { updateSearchCount } from "../appwrite.js";

// 1. Define API constants OUTSIDE the component.
// This prevents them from being redeclared on every render.
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

const AllMoviesPage = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState(
        location.state?.initialSearch || ""
    );
    const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
    const [movieList, setMovieList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

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

                if (!data.results || data.results.length === 0) {
                    if (query) {
                        setErrorMessage(`No results found for "${query}"`);
                    }
                    setMovieList([]);
                    return;
                }

                setMovieList(data.results);

                if (query) {
                    await updateSearchCount(query, data.results[0]);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                setErrorMessage(
                    "Error fetching movies. Please try again later."
                );
                setMovieList([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies(debounceSearchTerm);
        // 2. Add API_OPTIONS to the dependency array.
        // This is not strictly required since we moved it outside the component,
        // but it's good practice to declare all external dependencies.
    }, [debounceSearchTerm]);

    return (
        <div className="wrapper w-full px-5 xs:px-10">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="mt-12">
                <AllMoviesSection
                    movieList={movieList}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                />
            </div>
        </div>
    );
};

export default AllMoviesPage;
