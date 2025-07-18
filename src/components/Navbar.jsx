const Navbar = () => {
    return (
        <nav className="w-full bg-black/60 backdrop-blur-md text-white px-6 py-4 fixed top-0 left-0 z-50 shadow-md">
            <ul className="flex justify-center space-x-6 text-sm font-medium">
                <li>
                    <a
                        href="#header"
                        className="hover:text-yellow-400 transition"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#trending"
                        className="hover:text-yellow-400 transition"
                    >
                        Trending
                    </a>
                </li>
                <li>
                    <a
                        href="#all-movies"
                        className="hover:text-yellow-400 transition"
                    >
                        All Movies
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
