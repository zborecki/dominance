/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyLabel } from '#/types/common';

type Translator = {
  (name: any): string;
  has(name: string): boolean;
};

export function resolveAnyLabel(name: AnyLabel, t: Translator): string {
  return t.has(name) ? t(name) : name;
}
