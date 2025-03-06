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
    <html lang="en">
      <body
        className="bg-cover bg-center h-screen flex flex-col items-center justify-between px-4 xl:px-0"
        style={{ backgroundImage: "url('/images/body_bg.jpg')" }}
      >
        <ThemeProvider>
          <div className="h-full w-full flex items-center justify-center">
            <div className="p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg rounded-xl w-full max-w-5xl h-[85vh] lg:h-[83vh]">
              <Header />
              <main className="px-3 h-[calc(80vh-60px)] lg:h-[calc(78vh-60px)] flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
