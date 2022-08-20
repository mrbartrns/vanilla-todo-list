import { Component } from '@core/.';
import { ComponentProps } from '@components/types';
import { goto } from '@utils/.';
import CounterComponent from '@/components/domain';

class HomePage extends Component<number> {
  onClick!: (e: Event) => void;

  constructor({ $target }: ComponentProps) {
    super({ $target, initialState: 0 });
  }

  setup() {
    console.log('setup');
  }

  template() {
    return `
      <main class="home">
        <div class="counter"></div>
        <button type="button" data-type="decrease">-</button>
        <button type="button" data-type="increase">+</button>
        <button type="button" class="route-change">go to post page</button>
      </main>
    `;
  }

  appendChild(): void {
    new CounterComponent({
      $target: this.node.querySelector('.counter')!,
      initialState: this.state,
    });
  }

  setEvents(): void {
    const routerButton = this.node.querySelector('.route-change')!;

    // ANCHOR: this.node에 걸어놓으면 이벤트가 여러번 등록되므로, wrapper를 만들어서 사용
    routerButton.addEventListener('click', (e: Event) => {
      if (!e.target) return;
      const target = e.target as HTMLElement;
      if (target.closest('button')?.className === 'route-change') {
        goto('/posts');
      }
    });
  }
}

export default HomePage;
