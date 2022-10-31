import greet from './greeting'

describe('test greet()', function () {
    it ('should greet a name', function () {
        expect(greet('James')).toEqual('Hello, James');
    });
    it ('should greet a default entry', function() {
        expect(greet()).toEqual('Hello there!');
    });
    it ('should greet in all uppercase', function () {
        expect(greet('JAMES')).toEqual('HELLO JAMES!');
    });
    it ('should greet 2 names', function () {
        expect(greet('James', 'Pep')).toEqual('Hello, James, Pep');
    });
    it ('should greet multiple names', function () {
        expect(greet(['James', 'Bob', 'Carl', 'Anna'])).toEqual(
            'Hello, James, Bob, Carl, Anna'
            );
    });
});