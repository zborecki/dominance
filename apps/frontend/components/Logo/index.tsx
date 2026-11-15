import { cn } from '@heroui/styles';

import { LogoProps } from '#/components/Logo/types';
import Logomark from '#/components/Logomark';
import Logotype from '#/components/Logotype';

export default function Logo({ as, className, classNames }: LogoProps) {
  const Component = as ?? 'div';

  return (
    <Component className={cn('flex items-center gap-2.5 max-w-fit', className)}>
      <Logomark className={classNames?.logomark} />
      <Logotype className={classNames?.logotype} />
    </Component>
  );
}
