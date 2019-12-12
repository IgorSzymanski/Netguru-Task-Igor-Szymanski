import { Movie } from '../movies/movie.type'

export type Comment = {
	id: string
	movieId: string
	movie: Movie
	username: string
	email: string
	body: string
	createdAt: Date
}
