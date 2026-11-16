import { MessageKeys, Messages, NestedKeyOf } from 'next-intl';

export type Identifier = string | number;

export type Label = MessageKeys<Messages, NestedKeyOf<Messages>>;

export type AnyLabel = Label | (string & {});

export type Nullable<T> = T | null;

export type WithIdentifier<T extends object> = T & {
  id?: Identifier;
}
