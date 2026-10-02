/**
 * Мемоизирует функцию - кэширует результаты по аргументам.
 * 
 * @param {Function} fn - функция для мемоизации
 * @returns {Function} - обёртка с кэшем
 * 
 * @example
 * const slowSquare = memoize((n) => n * n);
 * slowSquare(7); // 49 (вычислено)
 * slowSquare(7); // 49 (из кэша)
 */

function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };    
}

module.exports = memoize;