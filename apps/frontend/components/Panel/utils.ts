import { PanelVariantsProps } from './variants';

export const getBorderColor = ({ border, borderColor }: Pick<PanelVariantsProps, 'border' | 'borderColor'>) =>
  border === false ? undefined : borderColor ?? 'subtle';
