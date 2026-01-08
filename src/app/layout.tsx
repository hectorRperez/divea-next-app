import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const suisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/suisse-intl/SuisseIntl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/suisse-intl/SuisseIntl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/suisse-intl/SuisseIntl-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/suisse-intl/SuisseIntl-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suisse',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Divea',
  description: 'Personal productivity board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={suisseIntl.variable}>{children}</body>
    </html>
  );
}
