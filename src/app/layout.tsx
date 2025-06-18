import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// 변수명 충돌 해결: 'localFont' 변수명을 'satoshi'로 변경
const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/integral/Integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Practice Store',
  description: 'A practice store built with Next.js 15 and Tailwind CSS',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      {/* 두 폰트 변수 모두 클래스에 추가 */}
      <body className={`min-w-[390px] font-satoshi antialiased`}>{children}</body>
    </html>
  );
}
