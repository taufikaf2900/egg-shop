import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Egg Shop - Pelanggan',
  description: 'Halaman daftar pelanggan',
};

const Page = () => {
  return (
    <>
      {/* Bagian Atas Halaman Pelanggan */}
      <Card className="rounded-none sticky top-0 z-10">
        <CardHeader>
          <CardTitle>Pelanggan</CardTitle>
        </CardHeader>
      </Card>

      {/* Bagian Utama Halaman Pelanggan */}
      <div className="px-7 py-4 pb-[1000px]">
        <h3>Pelanggan</h3>
      </div>
    </>
  );
};

export default Page;
