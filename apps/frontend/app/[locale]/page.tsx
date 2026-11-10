import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();

  return (
    <p className='leading-130'>{t('button.search')}</p>
  );
}
