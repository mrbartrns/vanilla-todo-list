import { ComponentProps } from '@components/types';

class Component<T = unknown> {
  node: Element;

  state: T;

  subscribers: Set<Component>;

  constructor({ $target, initialState }: ComponentProps<T>) {
    this.node = $target;
    this.state = initialState;
    this.subscribers = new Set();
    this.setup();
    this.render();
    this.fetch();
  }

  // ANCHOR: mount 됬을 때 오직 단 한번만 실행하는 함수
  setup() {}

  setState(nextState: T) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.node.innerHTML = this.template();
    this.mounted();
  }

  template(): string {
    return '';
  }

  appendChild() {}

  setEvents(): void {}

  mounted() {
    this.setEvents();
    this.appendChild();
  }

  // ANCHOR: 추후 최적화를 위한 도구
  subscribe(target: Component) {
    this.subscribers.add(target);
  }

  publish() {
    this.subscribers.forEach((component) => component.render());
  }

  fetch() {}
}

export default Component;
