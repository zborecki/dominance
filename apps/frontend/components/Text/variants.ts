import { tv, VariantProps } from '@heroui/styles';

export const textVariants = tv({
  base: '',
  defaultVariants: {
    color: 'textSecondary',
    family: 'instrument',
    size: 'bodyMedium',
    weight: 'regular'
  },
  variants: {
    color: {
      inherit: 'text-[inherit]',
      textPrimary: 'text-ink-800',
      textSecondary: 'text-ink-300'
    },
    family: {
      unbounded: 'font-unbounded',
      instrument: 'font-instrument-sans'
    },
    size: {
      bodyMedium: 'type-body-medium',
      labelMedium: 'type-label-medium'
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
  }
});

export type TextVariantsProps = VariantProps<typeof textVariants>;

