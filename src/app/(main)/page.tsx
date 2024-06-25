import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Egg Shop - Dashboard',
  description: 'Halaman Dashboard',
};

export default function Dashboard() {
  return (
    <div>
      {/* Dashboard Top Section */}
      <div>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Dashboard main Section */}
      <div className="px-7 py-4">
        <h3>Dahsboard</h3>
      </div>
    </div>
  );
}
