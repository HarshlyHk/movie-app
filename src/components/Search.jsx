// src/components/Search.jsx

const Search = ({ searchTerm, setSearchTerm, onSearchSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the page from reloading
        if (onSearchSubmit) {
            onSearchSubmit(searchTerm);
        }
    };

    return (
        // Wrap input in a form to handle submission
        <form className="search" onSubmit={handleSubmit}>
            <div>
                <img src="/search.svg" alt="Search" />
                <input
                    type="text"
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </form>
    );
};

export default Search;
