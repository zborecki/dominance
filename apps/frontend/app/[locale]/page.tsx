import { getTranslations } from 'next-intl/server';

import Panel from '#/components/Panel';

export default async function Home() {
  const t = await getTranslations();

  return (
    <main>
      <Panel as='header' border='bottom'>
        {t('button.search')}
      </Panel>
    </main>
  );
}
