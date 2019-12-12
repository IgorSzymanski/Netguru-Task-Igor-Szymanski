import { AddMovieDTO } from './movie.dto'
import { IMovieRepository } from './movie-repository.interface'
import { FindMovieInOMDbByTitleFunction } from '~/domain/omdb/omdb-service.interface'
import { OMDbMovie } from '~/domain/omdb/omdb-movie.type'

/**
 * Replace "N/A" value with undefined and calls transformer callback if defined.
 */
export function dropNA<I extends string>(value: I | undefined): I | undefined
export function dropNA<I extends string, R>(value: I | undefined, cb: (v: I) => R): R | undefined
export function dropNA<I extends string, R>(
	value: I | undefined,
	cb?: (v: I) => R
): I | R | undefined {
	return value === 'N/A' || !value ? undefined : cb ? cb(value) : value
}

/**
 * Quick way to convert a string to date.
 */
export const date = (dateString: string) => new Date(dateString)

/**
 * To keep property names lower-case.
 */
export const convertOMDbMovieToMovie = (data: OMDbMovie): AddMovieDTO => ({
	title: data.Title,
	year: dropNA(data.Year, Number),
	rated: dropNA(data.Rated),
	released: dropNA(data.Released, date),
	runtime: dropNA(data.Runtime),
	genre: dropNA(data.Genre),
	director: dropNA(data.Director),
	writer: dropNA(data.Writer),
	actors: dropNA(data.Actors),
	plot: dropNA(data.Plot),
	language: dropNA(data.Language),
	country: dropNA(data.Country),
	awards: dropNA(data.Awards),
	poster: dropNA(data.Poster),
	ratings: data.Ratings?.map(({ Source: source, Value: value }) => ({ source, value })),
	metascore: dropNA(data.Metascore, Number),
	imdbRating: dropNA(data.imdbRating, Number),
	imdbVotes: dropNA(data.imdbVotes),
	type: dropNA(data.Type),
	dvd: dropNA(data.DVD, date),
	boxOffice: dropNA(data.BoxOffice),
	production: dropNA(data.Production),
	website: dropNA(data.Website),
	response: dropNA(data.Response),
})

/**
 * Gets movie data from an outer source, merges it with the input and stores in the repository.
 */
export const createAddMovie = (findMovieInOMDb: FindMovieInOMDbByTitleFunction) => (
	repository: IMovieRepository
) => async (input: AddMovieDTO) => {
	const movie: AddMovieDTO = {
		...convertOMDbMovieToMovie(await findMovieInOMDb(input)),
		...input,
	}
	return (await repository.add(movie)).id
}

/**
 * Lists all movies from the repository.
 */
export const createListMovies = (repository: IMovieRepository) => () => repository.listAll()
