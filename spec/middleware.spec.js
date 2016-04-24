import { default as middleware } from '../src/middleware'
import { default as expect } from 'expect'

describe('Redux SimpleStorage', () => {

    it ('should exist', () => {
        expect(typeof middleware).toEqual('function')
    })
})
