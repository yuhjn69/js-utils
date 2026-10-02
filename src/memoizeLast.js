/**
 * Мемоизирует функцию - кэширует последний результат по аргументам.
 * 
 * @param {Function} fn - функция для мемоизации
 * @returns {Function} - обёртка с кэшем последнего вычисления
 * 
 * @example
 * const slowSquare = memoizeLast((n) => n * n);
 * slowSquare(7); // 49 (вычислено)
 * slowSquare(6); // 36 (вычислено)
 * slowSquare(6); // 36 (из кэша)
 * slowSquare(7); // 49 (вычислено заново)
 */

function memoizeLast(fn) {
    let lastKey;
    let lastResult;
    return function(...args) {
        const key = JSON.stringify(args);
        if (key === lastKey) {
            return lastResult;
        } else {
            lastKey = key;
            lastResult = fn(...args);
            return lastResult;
        }
    };
}

module.exports = memoizeLast;