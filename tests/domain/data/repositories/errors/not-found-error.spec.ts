import { NotFoundError } from "~/data/repositories/errors/not-found.error"

describe('NotFoundError propery formated', () => {
    test('Error thrown properly', () => {
        expect(() => {
            throw new NotFoundError('Movie', '1')
        }).toThrowError(`Resource [Movie] with id [1] not found!`)
    })
})