import { TextVariantsProps } from '#/components/Text/variants';
import { BaseProps, ChildrenProps } from '#/components/types';
import { LinkAPI } from '#/types/api/common';

type BaseTextProps = BaseProps & ChildrenProps<'required'> & TextVariantsProps;

type TextTypographyProps = BaseTextProps & {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & {
  [K in keyof Pick<LinkAPI, 'href' | 'isExternal'>]?: never;
}

type TextAnchorProps = BaseTextProps & LinkAPI & {
  as: 'a';
}

type TextLinkProps = BaseTextProps & LinkAPI & {
  as: 'link';
}

export type TextProps = TextTypographyProps | TextAnchorProps | TextLinkProps;
