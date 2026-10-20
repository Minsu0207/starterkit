import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

// shadcn 생성 코드는 effect 안에서 setState를 호출해 react-hooks 린트에 걸리므로
// useSyncExternalStore로 미디어 쿼리를 구독하도록 바꿨다.
function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    // 서버 렌더링에서는 데스크톱으로 가정한다
    () => false,
  );
}
