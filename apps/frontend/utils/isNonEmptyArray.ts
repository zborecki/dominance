export function isNonEmptyArray<T>(element: unknown): element is T[] {
  return Array.isArray(element) && element.length > 0;
}
