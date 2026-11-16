import { cn } from '@heroui/styles';

import { TextProps } from '#/components/Text/types';
import { textVariants } from '#/components/Text/variants';
import { getAnchorTarget } from '#/components/utils/getAnchorTarget';
import { Link } from '#/i18n/navigation';

export default function Text({
  as: Component = 'p', className, children, isExternal, href, ...props
}: TextProps) {
  const commonProps = {
    className: cn(textVariants(props), className),
    children
  };

  if (Component === 'link') {
    return (
      <Link
        data-type={Component}
        href={href as string}
        target={getAnchorTarget(isExternal)}
        {...commonProps}
      />
    );
  }

  if (Component === 'a') {
    return (
      <a
        data-type={Component}
        href={href}
        target={getAnchorTarget(isExternal)}
        {...commonProps}
      />
    );
  }

  return (
    <Component {...commonProps} />
  );
}
