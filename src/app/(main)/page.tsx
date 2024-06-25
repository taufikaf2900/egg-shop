import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Egg Shop - Dashboard',
  description: 'Halaman Dashboard',
};

export default function Dashboard() {
  return (
    <>
      {/* Dashboard Top Section */}
      <Card className="rounded-none sticky top-0 z-10">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
      </Card>

      {/* Dashboard main Section */}
      <div className="px-7 py-4">
        <h3>Dahsboard</h3>
      </div>
    </>
  );
}
