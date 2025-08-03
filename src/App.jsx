// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import MainLayout from "./layouts/MainLayout";
import SettingsLayout from "./layouts/SettingsLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllMoviesPage from "./pages/AllMoviesPage"; // Import the new page
import TrendingPage from "./pages/TrendingPage"; // Import the new page
import GeneralSettings from "./pages/settings/GeneralSettings";
import AppearanceSettings from "./pages/settings/AppearanceSettings";
import DataUsageSettings from "./pages/settings/DataUsageSettings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* RootLayout provides the Navbar to all routes */}
                <Route element={<RootLayout />}>
                    {/* Home page (now simpler) */}
                    <Route index element={<Home />} />

                    {/* New dedicated page for All Movies & Search */}
                    <Route
                        path="all-movies"
                        element={
                            <MainLayout>
                                <AllMoviesPage />
                            </MainLayout>
                        }
                    />

                    {/* New dedicated page for Trending Movies */}
                    <Route
                        path="trending"
                        element={
                            <MainLayout>
                                <TrendingPage />
                            </MainLayout>
                        }
                    />

                    {/* Dashboard route */}
                    <Route
                        path="dashboard"
                        element={
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        }
                    />

                    {/* Settings route with its own layout */}
                    <Route path="settings" element={<SettingsLayout />}>
                        <Route index element={<GeneralSettings />} />
                        <Route path="general" element={<GeneralSettings />} />
                        <Route
                            path="appearance"
                            element={<AppearanceSettings />}
                        />
                        <Route
                            path="data-usage"
                            element={<DataUsageSettings />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
