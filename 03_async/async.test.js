const axios = require('axios')
const Ajax = require('./async')
const MockAdapter = require('axios-mock-adapter')
const backendUrl = 'https://jsonplaceholder.typicode.com/todos/1'

describe('Ajax: echo', () => {
    test('should return value async', async () => {
        const res = await Ajax.echo('some data')
        expect(res).toBe('some data')
    })

    test('should catch error', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})

describe('Ajax: GET', () => {
    let response
    let todos
    let fn

    beforeEach(() => {
        todos = [{
            id: 1,
            title: 'Todo 1',
            completed: false
        }]

        response = {
            data: {
                todos
            }
        }

        fn = jest.fn(console.log)
    })

    test('should return data from backend', async () => {
        const mock = new MockAdapter(axios);

        mock.onGet(backendUrl).reply(200, response)

        const res = await Ajax.get(backendUrl, fn)
        expect(res.data.todos).toEqual(todos)

    })

    test('should call callback 1 times', async () => {
        await Ajax.get('_' + backendUrl, fn)
        expect(fn).toBeCalledTimes(1)
    })
})