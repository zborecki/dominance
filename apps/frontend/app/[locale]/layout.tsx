import { cn } from '@heroui/styles';
import { Unbounded, Instrument_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import '#/css/globals.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-unbounded'
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-instrument-sans'
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html
      data-version={process.env.NEXT_PUBLIC_VERSION}
      data-env={process.env.NODE_ENV}
      lang={locale}
      data-theme='light'
    >
      <body className={cn(unbounded.variable, instrumentSans.variable)}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
