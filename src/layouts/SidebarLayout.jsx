import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const SidebarLayout = ({ children }) => {
    return (
        <>
            {/* Sidebar + Main Content Wrapper */}
            <div className="flex min-h-screen pt-16 bg-gray-950 text-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-900 p-6 shadow-md">
                    <nav className="space-y-4 text-teal-300">
                        <Link
                            to="/dashboard"
                            className="block hover:text-teal-400"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/settings"
                            className="block hover:text-teal-400"
                        >
                            Settings
                        </Link>
                        {/* Future links like /watchlist or /account */}
                    </nav>
                </aside>

                {/* Routed View Content */}
                <main className="flex-1 px-6 py-10">{children}</main>
            </div>
        </>
    );
};

export default SidebarLayout;
