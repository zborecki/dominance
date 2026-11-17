import { buttonVariants as heroButtonVariants, tv, VariantProps } from '@heroui/styles';

export const buttonVariants = tv({
  base: 'rounded-md',
  extend: heroButtonVariants,
  defaultVariants: {
    variant: 'primary'
  },
  variants: {
    variant: {
      primary: '[--button-bg:var(--color-primary)] [--button-bg-hover:var(--color-primary-600)]',
      ghost: '[--button-bg-hover:var(--color-slate-100)] [--button-fg:var(--color-ink-800)]'
    },
    size: {
      sm: 'type-label-medium font-semibold px-[14px] h-[36px]',
      md: 'type-label-medium font-semibold px[20px]'
    }
  }
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

