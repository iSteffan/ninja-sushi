import type { Metadata } from 'next';
import { dir } from 'i18next';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/section/header/Header';
import { languages } from '../i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ninja sushi',
  description: 'Delivery sushi web application',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }
