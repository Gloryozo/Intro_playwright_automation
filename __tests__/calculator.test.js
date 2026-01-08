import { add } from "../src/calculatorAdd.js";
import {divide} from "../src/calculatorDivide.js";

describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    it ('adds two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    it('throws error when inputs are not numbers', () => {
        expect(() => add('a', 3)).toThrow('Add expects two numbers as arguments');
    })
});

describe ('divide', () => {
    it ('divides two positive numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });
    it ('divides a positive and a negative number', () => {
        expect(divide(6, -2)).toBe(-3);
    });
    it ('divides two negative numbers', () => {
        expect(divide(-6, -2)).toBe(3);
    });
    it ('throws error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
    });
    it('throws error when inputs are not numbers', () => {
        expect(() => divide(4,'a')).toThrow('Divide expects two numbers as arguments');
    });
    it('throws error when inputs are NaN', () => {
        expect(() => divide(NaN, 3)).toThrow('NaN is not a valid number for division');
    });
    it('throws error when dividing zero by zero', () => {
        expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
    it('throws error when both arguments are strings', () => {
        expect(() => divide('6', '2')).toThrow('Divide expects two numbers as arguments');
    });
    it('throws error when inputs are arrays', () => {
        expect(() => divide([6], 2)).toThrow('Divide expects two numbers as arguments');
    });
    it('throws error when inputs are objects', () => {
        expect(() => divide({}, 2)).toThrow('Divide expects two numbers as arguments');
    });
    it('throws error when inputs are null', () => {
        expect(() => divide(null, 2)).toThrow('Divide expects two numbers as arguments');
    });
    it('throws error when inputs are undefined', () => {
        expect(() => divide(6, undefined)).toThrow('Divide expects two numbers as arguments');
    });
});