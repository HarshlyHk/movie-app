import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings"; // Assuming you have a Settings page

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />{" "}
                <Route path="/settings" element={<Settings />} />{" "}
                {/* ⬅️ New route */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
