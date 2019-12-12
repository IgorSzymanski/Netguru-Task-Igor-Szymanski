import { IMovieRepository } from '~/domain/resources/movies/movie-repository.interface'
import { MovieModel } from '../schemas/movie.schema'
import { NotFoundError } from './errors/not-found.error';

export const MovieRepository = (): IMovieRepository => ({
	add: async (input) => (await MovieModel.create(input)).toObject(),
	listAll: async () => (await MovieModel.find().exec()).map(model => model.toObject()),
	findById: async (id) => { 
		try {
		const movie = await MovieModel.findById(id).exec()
		if(!movie) {
			throw new NotFoundError('Movie', id)
		}
		return movie.toObject()

		} catch(e) {
			throw new NotFoundError('Movie', id)
		}
	}
})
