import { PanelVariantsProps } from '#/components/Panel/variants';
import { ChildrenProps, BaseProps } from '#/components/types';

export type PanelClassNames = 'wrapper';

export interface PanelProps extends BaseProps<PanelClassNames>, ChildrenProps, PanelVariantsProps {
  as?: 'header' | 'section' | 'div';
}
