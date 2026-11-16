import { AnyLabel, WithIdentifier } from '#/types/common';

export type LinkAPI = {
  href: string;
  isExternal?: boolean;
}

export type LabeledLinkAPI = WithIdentifier<LinkAPI & {
  name: AnyLabel;
}>;
