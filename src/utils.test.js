import { sayHello } from "./utils.js";

test('should return Hello Varlince', () => {
    expect(sayHello('Varlince')).toBe('Hello Varlince')
})

test('should return Hello 44', () => {
    expect(sayHello(44)).toBe('Hello 44')
})

test('should return Hello ___', () => {
    expect(sayHello()).toBe('Hello undefined')
})