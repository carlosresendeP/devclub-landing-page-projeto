export function computeScrollProgress(wrapper: HTMLElement) {
  const start = wrapper.offsetTop;
  const end = start + wrapper.offsetHeight - window.innerHeight;
  if (end <= start) return 0;
  return Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
}

export function smoothstep(p: number) {
  return p * p * (3 - 2 * p);
}

export function debounce<T extends (...args: never[]) => void>(fn: T, wait: number) {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), wait);
  };
}
