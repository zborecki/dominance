import { WrapperVariantsProps } from '#/components/Wrapper/variants';
import { IBaseProps, ChildrenProps } from '#/components/types';

export interface IWrapperProps extends ChildrenProps, IBaseProps, WrapperVariantsProps {
  component?: 'div' | 'main';
}
