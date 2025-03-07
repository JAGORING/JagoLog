import type { Metadata } from 'next';
import '@/config/globals.css';
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';
import { ThemeProvider } from '@/layouts/theme/Provider';

export const metadata: Metadata = {
  title: 'JagoLog',
  description: 'Jago의 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scrollbar-thin scrollbar-thumb-rounded ">
      <body className="flex flex-col w-full min-h-screen mx-auto p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg rounded-xl max-w-4xl">
        <ThemeProvider>
          <Header />
          <main className="px-3 flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
