import { cn } from '@heroui/styles';

import { BaseProps } from '#/components/types';
import { companyName } from '#/consts/brand';

export default function Logotype({ className }: BaseProps) {
  return (
    <span className={cn('typo-logotype', className)}>
      {companyName}
    </span>
  );
}
