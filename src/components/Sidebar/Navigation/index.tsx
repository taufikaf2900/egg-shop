import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  BadgeDollarSign,
  Users,
  UserCog,
  LogOut,
  CircleUserRound,
} from 'lucide-react';
import Link from 'next/link';
import EditProfile from '@/components/EditProfile';

const SidebarNavigation = () => {
  return (
    <Command className="p-4 rounded-none">
      <CommandList>
        <CommandGroup heading="Menu">
          <Link href="/">
            <CommandItem className={`cursor-pointer flex items-center gap-2`}>
              <LayoutDashboard size={18} />
              Dashboard
            </CommandItem>
          </Link>
          <Link href="/transaksi">
            <CommandItem className={`cursor-pointer flex items-center gap-2`}>
              <BadgeDollarSign size={18} />
              Transaksi
            </CommandItem>
          </Link>
          <Link href="/pelanggan">
            <CommandItem className={`cursor-pointer flex items-center gap-2`}>
              <Users size={18} />
              Pelanggan
            </CommandItem>
          </Link>
          <Link href="/users">
            <CommandItem className={`cursor-pointer flex items-center gap-2`}>
              <CircleUserRound size={18} />
              Users
            </CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pengaturan">
          <EditProfile>
            <div className="flex items-center gap-2 cursor-pointer w-full">
              <CommandItem className="flex items-center gap-2 cursor-pointer w-full">
                <UserCog size={18} />
                Profile
              </CommandItem>
            </div>
          </EditProfile>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Lain-lain">
          <CommandItem className="flex items-center gap-2 cursor-pointer">
            <LogOut size={18} />
            Sign Out
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SidebarNavigation;
