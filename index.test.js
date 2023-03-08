import { calculateSalesTax, factorial } from "./index.js";

test('$10 should be 70 cent tax', () => {
    expect(calculateSalesTax(10, 0.07)).toBe(.7)
    
})

test('$15 should be $1.05', () => {
    expect(calculateSalesTax(15, 0.07)).toBe(1.05)
})

test('$17.5 should be $1.23', () => {
    expect(calculateSalesTax(17.5, 0.07)).toBe(1.23)
})

test('3 factorial should be 6', () => {
    expect(factorial(3)).toBe(6)
})

test('3 factorial should be 6', () => {
    expect(factorial(5)).toBe(120)
})

test('3 factorial should be 6', () => {
    expect(factorial(6)).toBe(720)
})