'use client';

import Link from 'next/link';
import SidebarNavigation from './Navigation';

type SidebarProps = {
  isShow: boolean;
};
const Sidebar = ({ isShow }: SidebarProps) => {
  return (
    isShow && (
      <section className="relative w-full min-w-full h-full min-h-full md:w-[250px] md:min-w-[250px]">
        <aside className="absolute top-0 left-0 w-full min-w-full z-20 h-full min-h-full md:w-[250px] md:min-w-[250px] md:border-r-[1.75px] md:sticky md:top-0 md:border-slate-300 overflow-auto">
          <SidebarNavigation />
        </aside>
      </section>
    )
  );
};

export default Sidebar;
