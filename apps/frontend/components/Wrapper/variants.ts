import { tv, VariantProps } from '@heroui/styles';

export const wrapperVariants = tv({
  defaultVariants: {
    boxSizing: 'content',
    centered: true,
    maxWidth: 'default',
    padding: 'default'
  },
  variants: {
    boxSizing: {
      border: 'box-border',
      content: 'box-content'
    },
    centered: {
      false: null,
      true: 'mx-auto'
    },
    maxWidth: {
      default: 'max-w-7xl'
    },
    padding: {
      default: 'px-4',
      false: null
    }
  }
});

export type WrapperVariantsProps = VariantProps<typeof wrapperVariants>;

