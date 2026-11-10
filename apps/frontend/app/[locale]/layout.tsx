import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';
import '#/css/globals.css';

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html
      data-version={process.env.NEXT_PUBLIC_VERSION}
      data-env={process.env.NODE_ENV}
      lang={locale}
      data-theme='light'
    >
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
