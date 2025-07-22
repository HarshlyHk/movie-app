import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";

const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                bg-white/80 backdrop-blur-md
                transition-transform duration-300
                ${
                    scrollDirection === "down"
                        ? "-translate-y-full"
                        : "translate-y-0"
                }
                border-b border-gray-200
            `}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="text-xl font-bold text-gray-800">
                    MyApp
                </Link>

                <div className="flex space-x-6">
                    {isHome ? (
                        <>
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                Home
                            </a>
                            <a
                                href="#trending"
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                Trending
                            </a>
                            <a
                                href="#all-movies"
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                All Movies
                            </a>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-gray-900 transition ${
                                        isActive
                                            ? "font-semibold underline"
                                            : ""
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/settings/general"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-gray-900 transition ${
                                        isActive
                                            ? "font-semibold underline"
                                            : ""
                                    }`
                                }
                            >
                                Settings
                            </NavLink>
                            <NavLink
                                to="/"
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                Home
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
