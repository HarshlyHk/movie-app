// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import MainLayout from "./layouts/MainLayout";
import SettingsLayout from "./layouts/SettingsLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import GeneralSettings from "./pages/settings/GeneralSettings";
import AppearanceSettings from "./pages/settings/AppearanceSettings";
import DataUsageSettings from "./pages/settings/DataUsageSettings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* RootLayout provides the Navbar to all routes */}
                <Route element={<RootLayout />}>
                    {/* CORRECTED: Home route should NOT use MainLayout */}
                    <Route index element={<Home />} />

                    {/* Dashboard route correctly uses MainLayout for centering */}
                    <Route
                        path="dashboard"
                        element={
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        }
                    />

                    {/* Settings route correctly uses its own layout */}
                    <Route path="settings/*" element={<SettingsLayout />}>
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
