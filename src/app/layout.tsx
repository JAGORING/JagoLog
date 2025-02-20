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
      <body
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center px-4 xl:px-0"
        style={{ backgroundImage: "url('/images/body_bg.jpg')" }}
      >
        <div className="p-4 bg-black/30 backdrop-blur-md shadow-lg rounded-xl w-full max-w-5xl h-[80vh] lg:h-[75vh]">
          <Header />
          <main className="px-3 h-[calc(75vh-60px)] lg:h-[calc(70vh-60px)] flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
