import isValid from './solution';

describe('Valid Parenteses test', () => {
    const solution = require('./solution');
    
    test('()', () => {
        expect(isValid("()")).toBe(true);
    });

    test('()[]{}',()=>{
        expect(isValid("()[]{}")).toBe(true);
    });

    test('(]',()=>{
        expect(isValid("(]")).toBe(false);
    });
});