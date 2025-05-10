import Login from '@/components/Login';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-5xl font-bold text-green-600 mb-2">Zee</h1>
      <p className="text-sm text-gray-500 mb-6">Discover. Connect. Enjoy.</p>

    <Login />
    </div>
  );
}