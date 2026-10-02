/**
 * Создаёт новую функцию, где первые аргументы фиксированы.
 * 
 * @param {Function} fn - функция, которую нужно частично применить
 * @param {...*} args - аргументы, фиксируемые в новой функции
 * @returns {Function} - новая функция с фиксированными аргументами
 * 
 * @example
 * const add = (a, b, c) => a + b + c;
 * const add5 = partial(add, 5);
 * add5(2, 3); // add(5, 2, 3) = 10
 *
 * const add5and2 = partial(add, 5, 2);
 * add5and2(3); // add(5, 2, 3) = 10
 */

function partial(fn, ...args) {
    return function(...newArgs) {
        const allArgs = [...args, ...newArgs];
        return fn(...allArgs);
    };
}

module.exports = partial;