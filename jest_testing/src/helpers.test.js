//import the helpers file
const help = require('./helpers');

//'describe' is a global variable injected by jest

//'describe' blocks are necessary and can be nested to group tests
describe('helpers module', () => {
    describe('sum two numbers', () => {
        // write your test inside the describe block
        it('sums two integers', () => {
            const expected = 3;
            const actual = help.sum2(1, 2);
            //create an assertion
            //when we run the sum function with these input (1 and 2)
            //we expect it to be 3
            expect(actual).toBe(expected)
        })

        it('can add three numbers', () => {
            const expected = 6;
            const actual = help.sumMore(1, 2, 3);
            expect(actual).toBe(expected)
        })
    })
})
