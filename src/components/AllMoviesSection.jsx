import Spinner from "./Spinner.jsx";
import MovieCard from "./MovieCard.jsx";

const AllMoviesSection = ({ movieList, isLoading, errorMessage }) => {
    return (
        <section id="all-movies" className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <ul>
                    {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default AllMoviesSection;
