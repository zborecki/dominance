import { cn } from '@heroui/styles';

import { IWrapperProps } from '#/components/Wrapper/types';
import { wrapperVariants } from '#/components/Wrapper/variants';

export default function Wrapper({ children, className, component, ...props }: IWrapperProps) {
  const Component = component ?? 'div';

  return (
    <Component className={cn(wrapperVariants(props), className)}>
      {children}
    </Component>
  );
}
