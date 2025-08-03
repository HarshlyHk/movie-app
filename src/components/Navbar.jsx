import { Link, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useScrollDirection from "../hooks/useScrollDirection";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    // UPDATED: Define a single, consistent active class for all links
    const activeLinkClass = "text-teal-300 font-bold";

    const getNavLinkClass = ({ isActive }) => {
        if (isActive) return `${activeLinkClass} transition`;
        return "text-light-200 hover:text-white transition";
    };

    const getIconNavLinkClass = ({ isActive }) => {
        if (isActive) return `${activeLinkClass} scale-110 transition text-xl`;
        return "text-light-200 hover:text-white transition text-xl";
    };

    const baseScrollLinkClass =
        "text-light-200 hover:text-white transition cursor-pointer";

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                bg-dark-100/80 backdrop-blur-md
                transition-transform duration-300
                ${
                    scrollDirection === "down" && isHome
                        ? "-translate-y-full"
                        : "translate-y-0"
                }
                border-b border-light-100/10
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
                <Link to="/" className="text-xl font-bold text-white">
                    MyApp
                </Link>

                <div className="flex items-center space-x-6">
                    {isHome ? (
                        <>
                            <ScrollLink
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={baseScrollLinkClass}
                                activeClass={activeLinkClass} // Use the consistent active class
                            >
                                Home
                            </ScrollLink>
                            <ScrollLink
                                to="trending"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={baseScrollLinkClass}
                                activeClass={activeLinkClass} // Use the consistent active class
                            >
                                Trending
                            </ScrollLink>
                            <ScrollLink
                                to="all-movies"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={baseScrollLinkClass}
                                activeClass={activeLinkClass} // Use the consistent active class
                            >
                                All Movies
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/dashboard"
                                className={getNavLinkClass}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink to="/" className={getNavLinkClass}>
                                Home
                            </NavLink>
                        </>
                    )}

                    <NavLink
                        to="/settings"
                        title="Settings"
                        className={getIconNavLinkClass}
                    >
                        <FaCog />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
