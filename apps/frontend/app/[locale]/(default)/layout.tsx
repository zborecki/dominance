import { PropsWithChildren } from 'react';

import Header from '#/layouts/Header';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
