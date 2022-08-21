import { Component, Router } from '@core/.';
import { ComponentProps } from '@components/types';

class App extends Component {
  decrease!: () => void;

  increase!: () => void;

  constructor({ $target }: ComponentProps) {
    super({ $target, initialState: null });
  }

  template(): string {
    return '<div class="App"></div>';
  }

  appendChild(): void {
    const $app = this.node.querySelector('.App');
    new Router({ $target: $app!, initialState: null });
  }
}

export default App;
