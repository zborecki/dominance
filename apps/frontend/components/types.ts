import { ReactNode } from 'react';

export type BaseProps<
  TClassNames extends string = never,
  TProps extends object = object
> = SharedProps & TProps & ([TClassNames] extends [never]
  ? Omit<{ classNames?: never }, 'classNames'>
  : { classNames?: Record<TClassNames, string> });

export type ChildrenProps<T extends 'optional' | 'required' = 'required'> = T extends 'required'
  ? { children: ReactNode | ReactNode[] }
  : { children?: ReactNode | ReactNode[] };

export interface SharedProps {
  className?: string;
}
