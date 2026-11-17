'use client';

import { cn, Button as HeroButton } from '@heroui/react';
import { useTranslations } from 'next-intl';

import { ButtonProps } from '#/components/Button/types';
import { buttonVariants } from '#/components/Button/variants';
import { resolveAnyLabel } from '#/components/utils/resolveAnyLabel';

export default function Button({ className, label, ...props }: ButtonProps) {
  const t = useTranslations();

  return (
    <HeroButton className={cn(buttonVariants(props), className)}>
      {resolveAnyLabel(label, t)}
    </HeroButton>
  );
}
