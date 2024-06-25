'use client';
import Header from '@/components/Header';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="h-screen w-screen min-h-screen min-w-full overflow-hidden flex flex-col">
      <Header setIsShow={setIsShow} />
      <div className="grow flex overflow-auto relative">
        <Sidebar isShow={isShow} />
        <main className="grow overflow-auto dark:bg-slate-950">{children}</main>
      </div>
    </div>
  );
};

export default Wrapper;
