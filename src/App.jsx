import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // ⬅️ New import

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />{" "}
                {/* ⬅️ New route */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
