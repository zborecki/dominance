import { BaseProps } from '#/components/types';
import { LabeledLinkAPI } from '#/types/api/common';
import { Nullable } from '#/types/common';

export interface NavigationListProps extends BaseProps<'listItem' | 'link'> {
  items: Nullable<Array<LabeledLinkAPI>>;
}
