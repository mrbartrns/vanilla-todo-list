import Component from '@components/core';
import { ComponentProps } from '@components/types';

class CounterComponent extends Component<number> {
  constructor({ $target, initialState }: ComponentProps<number>) {
    super({ $target, initialState });
  }

  template(): string {
    return `
      <h1>${this.state}</h1>
    `;
  }
}

export default CounterComponent;
