import { Schema, model, Document } from 'mongoose'
import { Movie, MovieRating } from '~/domain/resources/movies/movie.type'

export type MovieDocument = Movie & Document

export const MovieRatingSchema = new Schema<MovieRating>(
	{
		source: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
	{
		_id: false,
	}
)

export const MovieSchema = new Schema<Movie>(
	{
		title: {
			type: String,
			required: true,
		},
		year: Number,
		rated: String,
		released: Date,
		runtime: String,
		genre: String,
		director: String,
		writer: String,
		actors: String,
		plot: String,
		language: String,
		country: String,
		awards: String,
		poster: String,
		ratings: [MovieRatingSchema],
		metascore: Number,
		imdbRating: Number,
		imdbVotes: String,
		imdbID: String,
		type: {
			type: String,
			enum: ['movie', 'series', 'episode'],
		},
		dvd: Date,
		boxOffice: String,
		production: String,
		website: String,
		response: String,
	},
	{
		timestamps: {
			createdAt: true,
		},
	}
)

MovieSchema.set('toObject', {
    virtuals: true
})

export const MovieModel = model<MovieDocument>('Movie', MovieSchema)
