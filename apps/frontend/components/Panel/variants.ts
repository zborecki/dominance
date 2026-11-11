import { tv, VariantProps } from '@heroui/styles';

export const panelVariants = tv({
  base: 'bg-white',
  defaultVariants: {
    border: false
  },
  slots: {
    wrapper: null
  },
  variants: {
    border: {
      bottom: {
        base: 'border-b'
      },
      false: null
    },
    borderColor: {
      subtle: {
        base: 'border-slate-300'
      }
    }
  }
});

export type PanelVariantsProps = VariantProps<typeof panelVariants>;

