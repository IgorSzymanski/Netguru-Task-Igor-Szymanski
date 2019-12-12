import { getEnvVariable, EnvVar } from '../src/env';

describe('getEnvVariable helper function.', () => {
    test('All variables should be of string type.', () => {
        const variables: EnvVar[] = ['NODE_ENV', 'PORT', 'MONGO_URL', 'OMDB_KEY']
        variables.forEach(variable => {
            expect(typeof getEnvVariable(variable)).toBe('string')
        })

    })

    test('Throws error if variable is not defined', () => {
        expect(() => { getEnvVariable(<any>'OTHER') }).toThrowError()
    })
})