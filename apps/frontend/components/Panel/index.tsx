import { cn } from '@heroui/styles';

import { PanelProps } from '#/components/Panel/types';
import { getBorderColor } from '#/components/Panel/utils';
import { panelVariants } from '#/components/Panel/variants';
import Wrapper from '#/components/Wrapper';

export default function Panel({
  as, border, borderColor, children, className, classNames, ...props
}: PanelProps) {
  const Component = as ?? 'div';
  const classes = panelVariants({
    ...props,
    border,
    borderColor: getBorderColor({ border, borderColor })
  });

  return (
    <Component className={cn(classes.base(), className)}>
      <Wrapper className={cn(classes.wrapper(), classNames?.wrapper)}>
        {children}
      </Wrapper>
    </Component>
  );
}
