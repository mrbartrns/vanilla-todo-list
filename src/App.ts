import Component from '@components/core';
import CounterComponent from '@components/domain/number';
import { ComponentProps } from '@components/types';

class App extends Component<number> {
  decrease!: () => void;

  increase!: () => void;

  constructor({ $target }: ComponentProps) {
    super({ $target, initialState: 0 });
  }

  setup(): void {
    this.decrease = () => {
      const currentState = this.state;
      this.setState(currentState - 1);
    };

    this.increase = () => {
      const currentState = this.state;
      this.setState(currentState + 1);
    };
  }

  template(): string {
    return `
      <div class="number"></div>
      <button data-type="decrease">-</button>
      <button data-type="increase">+</button>
    `;
  }

  setEvents(): void {
    const decreaseButton = this.node.querySelector('[data-type="decrease"]');
    const increaseButton = this.node.querySelector('[data-type="increase"]');

    decreaseButton?.addEventListener('click', this.decrease);
    increaseButton?.addEventListener('click', this.increase);
  }

  appendChild(): void {
    // eslint-disable-next-line no-new
    new CounterComponent({
      $target: this.node.querySelector('.number')!,
      initialState: this.state,
    });
  }
}

export default App;
