import { cn } from '@heroui/styles';

import NavigationItem from '#/layouts/Header/components/NavigationItem';
import { NavigationListProps } from '#/layouts/Header/components/NavigationList/types';
import { isNonEmptyArray } from '#/utils/isNonEmptyArray';

const NavigationList = ({ className, classNames, items }: NavigationListProps) => {
  if (!isNonEmptyArray(items)) return null;

  return (
    <ul className={cn('flex items-center gap-8', className)}>
      {
        items.map((item, index) => (
          <li
            className={classNames?.listItem}
            key={`NavigationItem-${item.href}-${item.name}-${item?.id || index}`}
          >
            <NavigationItem
              className={classNames?.link}
              {...item}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default NavigationList;
