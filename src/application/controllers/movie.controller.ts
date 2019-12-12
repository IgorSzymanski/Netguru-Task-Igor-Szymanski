import { JsonController, Get, Post, Body } from 'routing-controllers'

import { createListMovies, createAddMovie } from '~/domain/resources/movies/movie.service'
import { AddMovieDTO } from '~/domain/resources/movies/movie.dto'
import { findMovieInOMDbByTitle } from '~/domain/omdb/omdb.service'
import { MovieRepository } from '~/data/repositories/movie.repository'

@JsonController('/movies')
export class MovieController {
	@Get()
	list() {
		return createListMovies(MovieRepository())()
	}

	@Post()
	add(@Body() movie: AddMovieDTO) {
		return createAddMovie(findMovieInOMDbByTitle)(MovieRepository())(movie)
	}
}
