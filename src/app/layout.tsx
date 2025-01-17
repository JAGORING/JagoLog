import type { Metadata } from 'next';
import '@/config/globals.css';
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

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
    <html lang="en">
      <body>
        <Header />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
