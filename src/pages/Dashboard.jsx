import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-teal-300">Dashboard</h1>
            <p className="mt-2 text-gray-400">
                Welcome to your personalized dashboard.
            </p>
        </MainLayout>
    );
};

export default Dashboard;
