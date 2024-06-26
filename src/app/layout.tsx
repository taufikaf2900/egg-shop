import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';

export const metadata: Metadata = {
  title: 'Egg Shop - Dashboard',
  description: 'Egg Shop Dashboard Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
