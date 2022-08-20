const ROUTE_CHANGE = 'ROUTE_CHANGE';

export function onRouteChange(routeChangeCallback: () => void) {
  window.addEventListener(ROUTE_CHANGE, routeChangeCallback);
}

export function goto(url: string) {
  window.history.pushState(null, '', url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE));
}
