import { createAddMovie, createListMovies, dropNA, convertOMDbMovieToMovie } from '../../../src/domain/resources/movies/movie.service';
import { findMovieInOMDbByTitle } from '~/domain/omdb/omdb.service';
import { IMovieRepository } from '../../../src/domain/resources/movies/movie-repository.interface';
import { Movie } from '~/domain/resources/movies/movie.type'
import { NotFoundError } from '../../../src/data/repositories/errors/not-found.error';

describe('Movie service.', () => {
    const movies: Movie[] = []
    const throwError = (resource: string, id: string) => { throw new NotFoundError(resource, id) }

    const fakeRepository: IMovieRepository = {
        findById: (id) => movies.find(movie => movie.id === id) ?? throwError('Movie', id),
        listAll: () => movies,
        add: (resource) => {
            const movie = { id: String(Math.random()), ...resource }
            movies.push(movie)
            return movie
        }
    }

   const addMovie = createAddMovie(findMovieInOMDbByTitle)(fakeRepository)
   const listMovies = createListMovies(fakeRepository)

   listMovies

   test('addMovie stores input and fetched from API data and saves it to repository', () => {
       addMovie({ title: 'Harry Potter', year: 2002, plot: 'Test plot' }).then(movieId => {
           expect(movieId).toBeInstanceOf(String)
           Promise.resolve(fakeRepository.findById(movieId)).then(movie => {
            expect(movie.id).toBe(movieId)
            expect(movie.title).toBe('Harry Potter')
            expect(movie.plot).toBe('Test plot')
            expect(movie.year).toBe(2002)
            expect(movie.type).toBe('movie')
            expect(movie.language).toBeDefined()
           })
       })
   })

   test('dropNA return unfined for N/A, or unchanged value if other', () => {
       expect(dropNA('N/A')).not.toBeDefined()
       expect(dropNA('Other Value')).toBe('Other Value')
       expect(dropNA('123', Number)).toBe(123)
   })

   test('convertOMDbMovieToMovie converts properties properly', () => {
       const converted = convertOMDbMovieToMovie({
           Title: 'Harry Potter',
           Year: '2002',
           DVD: '6 Jan 1991',
           Ratings: [{
               Value: 'RatingValue',
               Source: 'RaringSource',
           }]
       })

       expect(converted.title).toBe('Harry Potter')
       expect(converted.year).toBe(2002)
       expect(converted.dvd).toMatchObject(new Date('6 Jan 1991'))
       expect(converted.ratings?.length).toBe(1)
       expect(converted.ratings?.[0]).toMatchObject({
            value: 'RatingValue',
            source: 'RaringSource',
       })
   })
})