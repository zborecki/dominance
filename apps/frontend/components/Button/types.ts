import { ButtonVariantsProps } from '#/components/Button/variants';
import { BaseProps } from '#/components/types';
import { AnyLabel } from '#/types/common';

export interface ButtonProps extends BaseProps, ButtonVariantsProps {
  label: AnyLabel;
}
