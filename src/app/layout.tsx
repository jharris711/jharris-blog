import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'J. Harris Web Dev',
  description:
    "Level up your JavaScript, TypeScript, React, Next.js, and more with our tech blog. Stay up-to-date with the latest trends, tips, and tutorials on web development. From beginner-friendly introductions to advanced concepts, we've got you covered. Enhance your coding skills, explore new frameworks, and discover practical insights to build impressive web applications. Join our community of tech enthusiasts and supercharge your journey in the world of JavaScript and beyond. Fuel your passion for tech with our expertly crafted content and unleash your potential as a developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='antialiased dark:bg-gray-800 dark:text-gray-100'>
            <div className='flex flex-col min-h-screen space-y-12 mb-auto'>
              <Header />
              <main className='container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl'>
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
