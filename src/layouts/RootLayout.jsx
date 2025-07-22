import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Wraps every route with the same Navbar
const RootLayout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default RootLayout;
