const removePersonWithID = require('../pure')

    describe('removePersonWithID', () => {
        test('returns an empty array ', () => {
            expect(removePersonWithID([])).toEqual([])
        });
        test('returns one object', () => {
            const input = [{ id: 1, name: 'foluso' }]
            const expected = [{ id: 1, name: 'foluso' }]
            const actual = removePersonWithID(input)
            expect(removePersonWithID(input)).toEqual(expected)
        });
        test('should ', () => {
            
        });
    })