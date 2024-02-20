import type { Metadata } from 'next';
import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/section/header/Header';
import { languages } from '../i18n/settings';
import { useTranslation } from '@/app/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ninja sushi',
  description: 'Delivery sushi web application',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}
export interface LayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export default async function RootLayout({ children, params: { lng } }: LayoutProps) {
  const { t } = await useTranslation(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={inter.className}>
        <h1>{t('title')}</h1>
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
