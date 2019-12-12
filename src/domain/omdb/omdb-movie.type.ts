export type OMDbMovie = {
	Title: string
	Year?: string
	Rated?: string
	Released?: string
	Runtime?: string
	Genre?: string
	Director?: string
	Writer?: string
	Actors?: string
	Plot?: string
	Language?: string
	Country?: string
	Awards?: string
	Poster?: string
	Ratings?: OMDbMovieRating[]
	Metascore?: string
	imdbRating?: string
	imdbVotes?: string
	imdbID?: string
	Type?: OMDbMovieType
	DVD?: string
	BoxOffice?: string
	Production?: string
	Website?: string
	Response?: string
}

export type OMDbMovieRating = { Source: string; Value: string }

export type OMDbMovieType = 'movie' | 'series' | 'episode'
