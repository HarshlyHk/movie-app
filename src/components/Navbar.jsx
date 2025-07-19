import { Link } from "react-scroll";
import useScrollDirection from "../hooks/useScrollDirection";

const Navbar = () => {
    const scrollDirection = useScrollDirection();

    return (
        <nav
            className={`w-full bg-black/60 backdrop-blur-md text-white px-6 py-4 fixed top-0 left-0 z-50 shadow-md transition-transform duration-300 ${
                scrollDirection === "down"
                    ? "-translate-y-full"
                    : "translate-y-0"
            }`}
        >
            <ul className="flex justify-center space-x-6 text-sm font-medium">
                <li>
                    <Link
                        to="header"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="trending"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition"
                    >
                        Trending
                    </Link>
                </li>
                <li>
                    <Link
                        to="all-movies"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition"
                    >
                        All Movies
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
