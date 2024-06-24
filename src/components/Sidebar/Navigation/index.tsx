import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import Link from 'next/link';

const SidebarNavigation = () => {
  return (
    <Command className="p-4 rounded-none">
      <CommandList>
        <CommandGroup heading="Menu">
          <Link href="/">
            <CommandItem className="cursor-pointer">Dashboard</CommandItem>
          </Link>
          <Link href="/transaksi">
            <CommandItem className="cursor-pointer">Transaksi</CommandItem>
          </Link>
          <Link href="/pelanggan">
            <CommandItem className="cursor-pointer">Pelanggan</CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pengaturan">
          <Link href="/profile">
            <CommandItem className="cursor-pointer">Profile</CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Lain-lain">
          <CommandItem>Sign Out</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SidebarNavigation;
