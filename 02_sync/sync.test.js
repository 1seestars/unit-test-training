const _ = require('./sync')

describe('Lodash: compact', () => {

    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
    })
})

describe('Lodash: groupBy', () => {
    let array

    beforeEach(() => {
        array = [2.2, 2.4, 4.2, 3.1]
    })

    test('should be defined', () => {
        expect(_.groupBy()).toBeDefined()
        expect(_.groupBy()).not.toBeUndefined()
    })

    test('should group array items by Math.floor', () => {
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should NOT return an array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})