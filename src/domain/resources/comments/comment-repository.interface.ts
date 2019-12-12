import { AddCommentDTO } from './comment.dto'
import { Comment } from './comment.type'
import { IRepository } from '../repository.interface'

// export type addComment = (input: AddCommentDTO) => Comment | Promise<Comment>
export type listCommentsForMovie = (movieId: string) => Comment[] | Promise<Comment[]>

export interface ICommentRepository extends IRepository<Comment, AddCommentDTO> {
	listAllForMovie: (movieId: string) => Comment[] | Promise<Comment[]>
}
