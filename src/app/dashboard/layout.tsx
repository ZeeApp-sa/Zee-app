import AuthGuard from '@/lib/AuthGuard';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <section className="p-4 bg-gray-50 min-h-screen">{children}</section>
    </AuthGuard>
  );
}
