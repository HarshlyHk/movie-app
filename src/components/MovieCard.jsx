import { useState } from "react";
// 1. Import the icon
import { BsBoxArrowUpRight } from "react-icons/bs";

const MovieCard = ({
    movie: {
        id,
        title,
        vote_average,
        release_date,
        original_language,
        poster_path,
        overview,
    },
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [providers, setProviders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [watchLink, setWatchLink] = useState(null);

    const fetchWatchProviders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${
                            import.meta.env.VITE_TMDB_API_KEY
                        }`,
                    },
                }
            );
            const data = await response.json();
            const result = data.results?.IN || {};
            setProviders(result.flatrate || []);
            setWatchLink(result.link || null);
        } catch (error) {
            console.error("Failed to fetch streaming providers", error);
            setProviders([]);
            setWatchLink(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFlip = async () => {
        if (!isFlipped && providers.length === 0) {
            await fetchWatchProviders();
        }
        setIsFlipped((prev) => !prev);
    };

    return (
        <div
            className={`movie-card ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
        >
            <div className="card-inner">
                {/* Front Face */}
                <div className="card-front">
                    <img
                        src={
                            poster_path
                                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                : "/no-movie.png"
                        }
                        alt={title}
                    />
                    <div className="mt-4">
                        <h3>{title}</h3>
                        <div className="content">
                            <div className="rating">
                                <img src="/star.svg" alt="Star Icon" />
                                <p>
                                    {vote_average
                                        ? vote_average.toFixed(1)
                                        : "N/A"}
                                </p>
                            </div>
                            <span>•</span>
                            <p className="lang">{original_language || "N/A"}</p>
                            <span>•</span>
                            <p className="year">
                                {release_date
                                    ? release_date.split("-")[0]
                                    : "N/A"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div className="card-back">
                    <h3 className="text-white text-lg font-semibold mb-2">
                        Overview
                    </h3>
                    <p className="text-sm text-gray-300 text-center mb-4 line-clamp-5">
                        {overview || "No overview available."}
                    </p>

                    <h3 className="text-white text-lg font-semibold mb-2">
                        Available On:
                    </h3>
                    {isLoading ? (
                        <p className="text-gray-300">Loading...</p>
                    ) : providers.length > 0 ? (
                        <ul className="flex flex-col gap-2 items-center">
                            {providers.map((provider) => (
                                <li key={provider.provider_id}>
                                    <a
                                        href={watchLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:opacity-80"
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                            alt={provider.provider_name}
                                            className="w-6 h-6 object-contain"
                                        />
                                        <span className="text-white">
                                            {provider.provider_name}
                                        </span>
                                        {/* 2. Added  the icon here! ✨ */}
                                        <BsBoxArrowUpRight className="text-white text-xs ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-300 text-sm">
                            Not available in India
                        </p>
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsFlipped(false);
                        }}
                        className="mt-4 px-3 py-1 rounded-md bg-light-200 text-sm text-dark-100 font-medium"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
