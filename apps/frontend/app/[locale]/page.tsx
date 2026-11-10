import { getTranslations } from 'next-intl/server';

import Wrapper from '#/components/Wrapper';

export default async function Home() {
  const t = await getTranslations();

  return (
    <Wrapper>{t('button.search')}</Wrapper>
  );
}
