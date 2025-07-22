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
                {/* Header always rendered by RootLayout */}
                <Route element={<RootLayout />}>
                    {/* Home */}
                    <Route
                        index
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />

                    {/* Dashboard — now uses MainLayout (no sidebar) */}
                    <Route
                        path="dashboard"
                        element={
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        }
                    />

                    {/* Settings — keeps its own sidebar via SettingsLayout */}
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
