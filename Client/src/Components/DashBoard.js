import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Total Users</h2>
            <p className="text-gray-700 text-xl">250</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-gray-700 text-xl">$10,000</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Orders</h2>
            <p className="text-gray-700 text-xl">50</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Products</h2>
            <p className="text-gray-700 text-xl">100</p>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8">
          {/* Replace this with your chart component or any other content */}
          <img
            src="https://via.placeholder.com/800x400"
            alt="Placeholder Chart"
            className="w-full h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
