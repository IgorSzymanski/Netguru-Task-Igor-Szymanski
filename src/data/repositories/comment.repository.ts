import { ICommentRepository } from '~/domain/resources/comments/comment-repository.interface'
import { CommentModel } from '../schemas/comment.schema'
import { NotFoundError } from './errors/not-found.error';

export const CommentRepository = (): ICommentRepository => ({
	add: async (input) => (await CommentModel.create(input)).toObject(),
	listAll: async () => (await CommentModel.find().exec()).map(model => model.toObject()),
	listAllForMovie: async (movieId) => (await CommentModel.find({ movieId }).exec()).map(model => model.toObject()),
	findById: async (id) => { 
		try {
		const movie = await CommentModel.findById(id).exec()
		if(!movie) {
			throw new NotFoundError('Movie', id)
		}
		return movie.toObject()

		} catch(e) {
			throw new NotFoundError('Movie', id)
		}
	}
})
