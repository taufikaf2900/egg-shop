import EditProfile from '@/components/EditProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egg Shop - Dashboard',
  description: 'Halaman Dashboard',
};

export default function Dashboard() {
  return (
    <div className="p-4">
      <EditProfile>
        <h3>Dahsboard</h3>
      </EditProfile>
    </div>
  );
}
