import MainLayout from "../layouts/MainLayout";

const Settings = () => {
    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center">
                <div className="p-8 rounded-lg bg-gray-900 shadow-xl">
                    <h1 className="text-3xl font-semibold text-teal-300">
                        Settings
                    </h1>
                    <p className="mt-2 text-gray-400">
                        Manage your preferences and personalization options
                        here.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Settings;
