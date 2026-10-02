/**
 * Выполняет функцию только при первом вызове.
 * 
 * Все последующие вызовы возвращают результат первого вызова,
 * не выполняя fn повторно.
 * 
 * @param {Function} fn - функция для однократного выполнения
 * @returns {Function} - обёртка, вызывающая fn только один раз
 * 
 * @example
 * let calls = 0;
 * const init = once(() => { calls++; return 'done'; });
 * 
 * init(); // 'done', calls = 1
 * init(); // 'done', calls = 1 (fn не вызвана)
 */

function once(fn) {
    let isCalled = false;
    let result;
    return function(...args) {
        if (isCalled === false) {
            isCalled = true;
            result = fn(...args);
        }
        return result;
    };
}

module.exports = once;