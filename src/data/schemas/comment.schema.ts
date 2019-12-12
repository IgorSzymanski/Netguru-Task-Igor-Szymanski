import { Schema, model, Document } from 'mongoose'
import { Comment } from '~/domain/resources/comments/comment.type'

export type CommentDocument = Comment & Document

export const CommentSchema = new Schema<Comment>(
	{
		movieId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: true,
		},
	}
)

CommentSchema.set('toObject', {
    virtuals: true
})

export const CommentModel = model<CommentDocument>('Comment', CommentSchema)
