export const debounce = (func: any, delay: number = 1000) => {
  let timeoutId: any;
  return (...args: any) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
