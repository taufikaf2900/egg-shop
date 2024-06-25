import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egg Shop - Users',
  description: 'Halaman Users',
};

const Page = () => {
  return (
    <div className="p-4">
      <h3>Users</h3>
    </div>
  );
};

export default Page;
