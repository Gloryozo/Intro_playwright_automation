export function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Add expects two numbers as arguments');
    } 
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError('NaN is not a valid number for addition');
    }
    
   
return a + b;
}