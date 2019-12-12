import { Comment } from '../comments/comment.type'

export type Movie = {
	id: string

	title: string
	year?: number
	rated?: string
	released?: Date
	runtime?: string
	genre?: string
	director?: string
	writer?: string
	actors?: string
	plot?: string
	language?: string
	country?: string
	awards?: string
	poster?: string
	ratings?: MovieRating[]
	metascore?: number
	imdbRating?: number
	imdbVotes?: string
	imdbID?: string
	type?: MovieType
	dvd?: Date
	boxOffice?: string
	production?: string
	website?: string
	response?: string

	createdAt?: Date
	comments?: Comment[]
}

export type MovieRating = { source: string; value: string }

export type MovieType = 'movie' | 'series' | 'episode'
