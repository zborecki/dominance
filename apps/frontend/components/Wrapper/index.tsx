import { cn } from '@heroui/styles';

import { WrapperProps } from '#/components/Wrapper/types';
import { wrapperVariants } from '#/components/Wrapper/variants';

export default function Wrapper({ children, className, as, ...props }: WrapperProps) {
  const Component = as ?? 'div';

  return (
    <Component className={cn(wrapperVariants(props), className)}>
      {children}
    </Component>
  );
}
