'use client';

import { cn } from '@heroui/styles';
import { useTranslations } from 'next-intl';

import Text from '#/components/Text';
import { resolveAnyLabel } from '#/components/utils/resolveAnyLabel';
import { usePathname } from '#/i18n/navigation';
import { NavigationItemProps } from '#/layouts/Header/components/NavigationItem/types';

const NavigationItem = ({
  className, name, href, isExternal
}: NavigationItemProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Text
      className={cn(!isActive && 'hover:text-primary transition-colors', className)}
      as='link'
      href={href}
      weight='semibold'
      size='labelMedium'
      color={isActive ? 'textPrimary' : 'textSecondary'}
      isExternal={isExternal}
    >
      {resolveAnyLabel(name, t)}
    </Text>
  );
};

export default NavigationItem;
