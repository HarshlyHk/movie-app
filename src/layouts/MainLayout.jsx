import Navbar from "../components/Navbar.jsx"; // Optional if you want scroll/routed nav

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Shared navbar for routed views */}
      <Navbar />

      <main className="min-h-screen pt-20 px-6 bg-gray-950 text-gray-100">
        {children}
      </main>
    </>
  );
};

export default MainLayout;