import { JsonController, Body, Get, Post } from 'routing-controllers'

import { AddCommentDTO } from '~/domain/resources/comments/comment.dto'
import { createAddComment, createListComments } from '~/domain/resources/comments/comment.service'
import { CommentRepository } from '~/data/repositories/comment.repository'
import { MovieRepository } from '~/data/repositories/movie.repository'

@JsonController('/comments')
export class CommentController {
	@Get()
	list() {
		return createListComments(CommentRepository())()
	}

	@Post()
	add(@Body() comment: AddCommentDTO) {
		return createAddComment(MovieRepository())(CommentRepository())(comment)
	}
}
