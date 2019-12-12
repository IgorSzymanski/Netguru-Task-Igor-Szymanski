import { ICommentRepository } from './comment-repository.interface'
import { AddCommentDTO } from '~/domain/resources/comments/comment.dto'
import { IMovieRepository } from '../movies/movie-repository.interface'

/**
 * Stores comments in the repository.
 */
export const createAddComment = (movieRepository: IMovieRepository) => (repository: ICommentRepository) => async (input: AddCommentDTO) => {
	await movieRepository.findById(input.movieId)
	return (await repository.add(input)).id
}

/**
 * Lists comments from the repository.
 */
export const createListComments = (repository: ICommentRepository) => () => repository.listAll()
