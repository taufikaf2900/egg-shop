import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Egg Shop - Transaksi',
  description: 'Halaman Transaksi',
};

const Page = () => {
  return (
    <>
      {/* Bagian Atas Halaman Transaksi */}
      <Card className="rounded-none sticky top-0 z-10">
        <CardHeader>
          <CardTitle>Transaksi</CardTitle>
        </CardHeader>
      </Card>

      {/* Bagian Utaman Halaman Transaksi */}
      <div className="px-7 py-4">
        <h3>Transaksi</h3>
      </div>
    </>
  );
};

export default Page;
