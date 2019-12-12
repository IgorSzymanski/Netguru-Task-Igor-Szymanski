import { parseOMDbUrl, findMovieInOMDbByTitle } from "~/domain/omdb/omdb.service"

describe('OMDb service.', () => {
    test('parseOMDbUrl properly stringifies fetch URL to OMDb.', () => {
        expect(parseOMDbUrl({ type: 'episode', t: 'title', 'apikey': 'apikey', 'y': 2000 }))
        .toBe('https://www.omdbapi.com/?apikey=apikey&t=title&type=episode&y=2000')
    })

    test('Service finds a movie by its title', async () => {
        const movie = await findMovieInOMDbByTitle({ title: `Harry Potter and the Chamber of Secrets`, year: 2002, type: 'movie' })

        expect(movie.Title).toBe(`Harry Potter and the Chamber of Secrets`)
        expect(movie.Type).toBe('movie')
        expect(movie.Year).toBe('2002')
        expect(movie).toMatchObject({
            
        })
    })
})