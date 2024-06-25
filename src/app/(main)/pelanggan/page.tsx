import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egg Shop - Pelanggan',
  description: 'Halaman daftar pelanggan',
};

const Page = () => {
  return (
    <div className="p-4">
      <h3>Pelanggan</h3>
    </div>
  );
};

export default Page;
