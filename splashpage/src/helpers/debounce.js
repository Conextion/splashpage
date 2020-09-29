export function debounce(callback, time = 250) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), time);
  };
}
