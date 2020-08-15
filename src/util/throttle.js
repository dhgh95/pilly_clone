const throttle = function (func, delay) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func(...arguments);
      }, delay);
    }
  };
};

export default throttle;
