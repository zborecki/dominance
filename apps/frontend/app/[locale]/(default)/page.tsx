import { getTranslations } from 'next-intl/server';

import Panel from '#/components/Panel';

export default async function Home() {
  const t = await getTranslations();

  return (
    <main>
      {t('button.search')}
    </main>
  );
}
