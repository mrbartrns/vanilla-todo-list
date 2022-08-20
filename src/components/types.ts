export interface ComponentProps<T = unknown> {
  $target: Element;
  initialState: T;
}
