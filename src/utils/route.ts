const ROUTE_CHANGE = 'ROUTE_CHANGE';

// ANCHOR: this의 binding 문제로, callback은 arrow function만 사용할 수 있음
export function onRouteChange(routeChangeCallback: () => void) {
  window.addEventListener(ROUTE_CHANGE, routeChangeCallback);
}

// ANCHOR: this의 binding 문제로, callback은 arrow function만 사용할 수 있음
export function goto(url: string) {
  window.history.pushState(null, '', url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE));
}
