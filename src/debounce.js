/**
 * Откладывает вызов функции, пока не пройдет delay (мс) без новых вызовов.
 * 
 * @param {Function} fn - функция, вызов которой нужно отложить
 * @param {number} delay - задержка в мс
 * @returns {Function} - обёртка, сбрасывающая предыдущий таймер и вызывающая fn через delay мс
 * 
 * @example
 * let calls = 0;
 * const debounced = debounce(() => calls++, 100);
 * 
 * debounced(); debounced(); debounced();
 * console.log(calls); // должно быть 0 — верно, таймер ещё не сработал
 * setTimeout(() => console.log(calls), 150); // должно быть 1 — верно
 */

function debounce(fn, delay) {
    let timerId;
    return function(...args) {
        const context = this;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

module.exports = debounce;