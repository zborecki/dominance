import { ReactNode } from 'react';

export type IBaseProps<TClassNames extends string = never, TProps extends object = object> = TProps & (
  [TClassNames] extends [never] ? { className?: never } : { className?: TClassNames }
);

export type ChildrenProps<T extends 'optional' | 'required' = 'optional'> = T extends 'required'
  ? { children: ReactNode | ReactNode[] }
  : { children?: ReactNode | ReactNode[] };
