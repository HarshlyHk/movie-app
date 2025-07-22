import Navbar from "../components/Navbar.jsx"; // Optional if you want scroll/routed nav

const MainLayout = ({ children }) => {
    return (
        <>
            <main className="min-h-screen px-6 pt-20 bg-gray-950 text-gray-100 flex items-center justify-center">
                {" "}
                {children}
            </main>
        </>
    );
};

export default MainLayout;
