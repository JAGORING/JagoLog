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
        className="bg-cover bg-center h-full min-h-screen flex items-center justify-center px-2 xl:px-0"
        style={{ backgroundImage: "url('/images/body_bg.jpg')" }}
      >
        <div className="p-2 bg-black/20 backdrop-blur-md shadow-lg rounded-xl w-full max-w-[1200px] h-[80vh] lg:h-[75vh] mx-auto my-6 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
          <Header />
          <main className="min-h-[67vh] lg:min-h-[62vh] flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
