import { NavLink, Outlet } from "react-router-dom";

const SettingsLayout = () => {
    return (
        <div className="flex min-h-screen pt-16 bg-gray-950 text-gray-100">
            <aside className="w-64 bg-gray-900 p-6 shadow-md">
                <nav className="space-y-4 text-teal-300">
                    <NavLink
                        to="/settings/general"
                        end
                        className={({ isActive }) =>
                            `block hover:text-teal-400 ${
                                isActive ? "font-bold text-teal-400" : ""
                            }`
                        }
                    >
                        General
                    </NavLink>

                    <NavLink
                        to="/settings/appearance"
                        className={({ isActive }) =>
                            `block hover:text-teal-400 ${
                                isActive ? "font-bold text-teal-400" : ""
                            }`
                        }
                    >
                        Appearance
                    </NavLink>

                    <NavLink
                        to="/settings/data-usage"
                        className={({ isActive }) =>
                            `block hover:text-teal-400 ${
                                isActive ? "font-bold text-teal-400" : ""
                            }`
                        }
                    >
                        Data Usage
                    </NavLink>
                </nav>
            </aside>

            <main className="flex-1 px-6 py-10">
                <Outlet />
            </main>
        </div>
    );
};

export default SettingsLayout;
