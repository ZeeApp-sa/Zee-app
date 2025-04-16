'use client';

import { useAuth } from '@/lib/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.email}</h1>
        <p className="text-gray-500">Here’s your store overview 👇</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Products" value="37" />
        <StatCard title="Orders This Week" value="12" />
        <StatCard title="Active Specials" value="4" />
        <StatCard title="New Customers" value="9" />
      </div>
    </div>
  );
}

// 💡 Simple reusable stat card component
function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="mt-2 text-2xl font-semibold text-primary">{value}</p>
    </div>
  );
}
