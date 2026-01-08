export function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Divide expects two numbers as arguments');
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError('NaN is not a valid number for division');
    }
    if (b === 0) {
        throw new RangeError('Division by zero is not allowed');
    }
    return a / b;
}