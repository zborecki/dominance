import { WrapperVariantsProps } from '#/components/Wrapper/variants';
import { BaseProps, ChildrenProps } from '#/components/types';

export interface WrapperProps extends ChildrenProps, BaseProps, WrapperVariantsProps {
  as?: 'div' | 'main';
}
