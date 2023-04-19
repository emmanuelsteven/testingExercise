const { default: expect } = require('expect');
const { add, subtract, multiply, divide} = require ('./calculator');

describe ('Test Add', () => {
    const x = 2;
    const y = 3;
    const expected = 5;
    test('Check Total', () => {
        expect(add(x,y)).toBe(expected);
    })
    test('Greater Than', () => {
        expect(add(x,y)).not.toBeGreaterThan(expected);
    })
});

describe ('Test Subtract', () => {
    const x = 5;
    const y = 3;
    const expected = 2;
    test('Check Total', () => {
        expect(subtract(x,y)).toBe(expected);
    })
    test('Lesser Than', () => {
        expect(subtract(x,y)).not.toBeLessThan(expected);
    })
});

describe ('Test Multiply', () => {
    const x = 5;
    const y = 3;
    const expected = 15;
    test('Check Total', () => {
        expect(multiply(x,y)).toBe(expected);
    })
    test('Lesser Than', () => {
        expect(multiply(x,y)).not.toBeLessThan(expected);
    })
});

describe ('Test Divide', () => {
    const x = 6;
    const y = 3;
    const expected = 2;
    test('Check Total', () => {
        expect(divide(x,y)).toBe(expected);
    })
    test('Lesser Than', () => {
        expect(divide(x,y)).not.toBeGreaterThan(expected);
    })
});