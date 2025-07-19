import Spinner from "./Spinner.jsx";

const TrendingSection = ({
    trendingMovies,
    isTrendingLoading,
    trendingError,
}) => {
    if (isTrendingLoading) return <Spinner />;
    if (trendingError) return <p className="text-red-500">{trendingError}</p>;
    if (trendingMovies.length === 0) return null;

    return (
        <section id="trending" className="trending">
            <h2>Trending Movies</h2>
            <ul>
                {trendingMovies.map((movie, index) => (
                    <li key={movie.$id}>
                        <p>{index + 1}</p>
                        <img src={movie.poster_url} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TrendingSection;
