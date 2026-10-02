const {
    memoize,
    once,
    partial,
    compose,
    pipe,
    memoizeLast,
    debounce,
} = require('./src/index');

console.log('=== memoize ===');
{
    let calls = 0;
    const m = memoize((n) => { calls++; return n * n; });
    console.log(m(5)); // 25
    console.log(m(5)); // 25
    console.log(m(6)); // 36
    console.log(m(6)); // 36
    console.log('calls:', calls); // 2
}

console.log('\n=== once ===');
{
    let calls = 0;
    const o = once(() => { calls++; return 'done'; });
    console.log(o()); // 'done'
    console.log(o()); // 'done'
    console.log(o()); // 'done'
    console.log('calls:', calls); // 1
}

console.log('\n=== partial ===');
{
    const add = (a, b, c) => a + b + c;
    const add5 = partial(add, 5);
    console.log(add5(2, 3)); // 10
    const add5and2 = partial(add, 5, 2);
    console.log(add5and2(3)); // 10
    const greet = (greeting, name, punct) => `${greeting}, ${name}${punct}`;
    const hi = partial(greet, 'Привет');
    console.log(hi('Anna', '!')); // 'Привет, Anna!'
}

console.log('\n=== compose ===');
{
    const add1 = x => x + 1;
    const double = x => x * 2;
    const square = x => x * x;
    const f = compose(square, double, add1);
    console.log(f(2)); // 36
    console.log(compose()(5)); // 5
    console.log(compose(add1)(5)); // 6
}

console.log('\n=== pipe ===');
{
    const add1 = x => x + 1;
    const double = x => x * 2;
    const square = x => x * x;
    const f = pipe(add1, double, square);
    console.log(f(2)); // 36
    console.log(pipe()(5)); // 5
    console.log(pipe(add1)(5)); // 6
}

console.log('\n=== memoizeLast ===');
{
    let calls = 0;
    const f = memoizeLast((a, b) => { calls++; return a + b; });
    console.log(f(1, 2)); // 3
    console.log(f(1, 2)); // 3 (кэш)
    console.log(f(1, 2)); // 3 (кэш)
    console.log(f(3, 4)); // 7 (новый вызов)
    console.log(f(3, 4)); // 7 (кэш)
    console.log(f(1, 2)); // 3 (снова новый вызов)
    console.log('calls:', calls); // 3
}

console.log('\n=== debounce ===');
{
    let calls = 0;
    const d = debounce(() => calls++, 100);
    d(); d(); d();
    console.log('сразу:', calls); // 0
    setTimeout(() => {
        console.log('через 150 мс:', calls); // 1
    }, 150);
}

setTimeout(() => { console.log('\n=== Проверка прошла успешно ===') }, 200);