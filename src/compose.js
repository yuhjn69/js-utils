/**
 * Принимает функции, применяемые справа налево.
 * 
 * @param {...Function} fns - массив функций, переданный в неё
 * @returns {Function} - новая функция, принимающая value и применяющая fns справа налево
 * 
 * @example
 * const add1 = x => x + 1;
 * const double = x => x * 2;
 * const square = x => x * x;
 * 
 * const f = compose(square, double, add1);
 * f(2); // square(double(add1(2))) = square(double(3)) = square(6) = 36
 * 
 * compose()(5); // 5 — без функций возвращает аргумент
 * compose(add1)(5); // 6 — одна функция
 */

function compose(...fns) {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

module.exports = compose;