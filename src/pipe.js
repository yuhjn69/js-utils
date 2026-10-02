/**
 * Принимает функции, применяемые слева направо.
 * 
 * @param {...Function} fns - массив функций, переданный в неё
 * @returns {Function} - новая функция, принимающая value и применяющая fns слева направо
 * 
 * @example
 * const add1 = x => x + 1;
 * const double = x => x * 2;
 * const square = x => x * x;
 * 
 * const f = pipe(add1, double, square);
 * f(2); // square(double(add1(2))) = square(double(3)) = square(6) = 36
 * 
 * pipe()(5); // 5
 * pipe(add1)(5); // 6
 */

function pipe(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

module.exports = pipe;