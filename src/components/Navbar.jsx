// src/components/Navbar.jsx

import { Link, NavLink } from "react-router-dom";
// We no longer need react-scroll or useLocation here
import useScrollDirection from "../hooks/useScrollDirection";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
    const scrollDirection = useScrollDirection();

    // A single, consistent function to style our navigation links
    const getNavLinkClass = ({ isActive }) => {
        if (isActive) {
            // Active state uses the consistent teal color
            return "text-teal-300 font-bold transition";
        }
        // Default state
        return "text-light-200 hover:text-white transition";
    };

    const getIconNavLinkClass = ({ isActive }) => {
        if (isActive) return "text-teal-300 scale-110 transition text-xl";
        return "text-light-200 hover:text-white transition text-xl";
    };

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                bg-dark-100/80 backdrop-blur-md
                transition-transform duration-300
                ${
                    scrollDirection === "down"
                        ? "-translate-y-full"
                        : "translate-y-0"
                }
                border-b border-light-100/10
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
                {/* Logo link still points to home */}
                <Link to="/" className="text-xl font-bold text-white">
                    MyApp
                </Link>

                {/* Simplified and consistent navigation links */}
                <div className="flex items-center space-x-6">
                    <NavLink to="/" className={getNavLinkClass} end>
                        Home
                    </NavLink>
                    <NavLink to="/trending" className={getNavLinkClass}>
                        Trending
                    </NavLink>
                    <NavLink to="/all-movies" className={getNavLinkClass}>
                        All Movies
                    </NavLink>
                    <NavLink to="/dashboard" className={getNavLinkClass}>
                        Dashboard
                    </NavLink>

                    {/* Settings Icon Link */}
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
