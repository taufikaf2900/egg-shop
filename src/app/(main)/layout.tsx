import type { Metadata } from 'next';
import ThemeProvider from '@/components/ThemeProvider';
import Wrapper from '@/components/Wrapper';

export const metadata: Metadata = {
  title: 'Egg Shop - Dashboard',
  description: 'Egg Shop Dashboard Page',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper children={children} />
        </ThemeProvider>
      </body>
    </html>
  );
}
