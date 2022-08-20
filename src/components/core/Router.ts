import Component from '@core/.';
import { ComponentProps } from '@components/types';
import { onRouteChange } from '@utils/.';

/**
 * ANCHOR: Router 요구 사항
 * 1. 뒤로 가기 버튼을 눌렀을 때, 뒤로 이동해야 한다.
 * 2. 뒤로 이동하거나 앞으로 이동할 때, 페이지가 새로고침 되어야 한다.
 * 3. 커스텀 이벤트를 만들어서 처리한다.
 */
class Router extends Component {
  constructor({ $target }: ComponentProps) {
    super({ $target, initialState: null });
  }

  // ANCHOR: 이 함수는 페이지가 렌더링 된 후, 단 한번만 실행하면 된다.
  setup() {
    window.addEventListener('popstate', this.render);
    onRouteChange(this.render);
  }

  render() {
    const { pathname } = window.location;

    if (pathname === '/') {
      this.node.innerHTML = '<h1>Home Page</h1>';
    } else if (pathname === '/posts') {
      this.node.innerHTML = '<h1>Posts Page</h1>';
    } else {
      this.node.innerHTML = '<h1>404 Page</h1>';
    }
  }
}

export default Router;
