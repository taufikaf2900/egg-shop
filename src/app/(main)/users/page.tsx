import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Egg Shop - Users',
  description: 'Halaman Users',
};

const Page = () => {
  return (
    <>
      {/* Bagian Atas Halaman Users */}
      <Card className="rounded-none sticky top-0 z-0">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
      </Card>

      {/* Bagian Utama Halaman Users */}
      <div className="px-7 py-4">
        <h3>Users</h3>
      </div>
    </>
  );
};

export default Page;
