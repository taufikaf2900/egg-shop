import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BadgeDollarSign,
  Users,
  UserCog,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <Command className="p-4 rounded-none">
      <CommandList>
        <CommandGroup heading="Menu">
          <Link href="/">
            <CommandItem
              className={`cursor-pointer ${
                pathname === '/' ? 'light:bg-slate-100 dark:bg-slate-800' : ''
              } flex items-center gap-2`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </CommandItem>
          </Link>
          <Link href="/transaksi">
            <CommandItem
              className={`cursor-pointer ${
                pathname === '/transaksi'
                  ? 'light:bg-slate-100 dark:bg-slate-800'
                  : ''
              } flex items-center gap-2`}
            >
              <BadgeDollarSign size={18} />
              Transaksi
            </CommandItem>
          </Link>
          <Link href="/pelanggan">
            <CommandItem
              className={`cursor-pointer ${
                pathname === '/pelanggan'
                  ? 'light:bg-slate-100 dark:bg-slate-800'
                  : ''
              } flex items-center gap-2`}
            >
              <Users size={18} />
              Pelanggan
            </CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pengaturan">
          <Link href="/profile">
            <CommandItem
              className={`cursor-pointer ${
                pathname === '/profile'
                  ? 'light:bg-slate-100 dark:bg-slate-800'
                  : ''
              } flex items-center gap-2`}
            >
              <UserCog size={18} />
              Profile
            </CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Lain-lain">
          <CommandItem className="flex items-center gap-2">
            <LogOut size={18} />
            Sign Out
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SidebarNavigation;
