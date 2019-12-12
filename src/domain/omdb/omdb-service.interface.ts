import { OMDbMovieType, OMDbMovie } from './omdb-movie.type'

export type ExternalCallFunctionArgument = {
	title: string
	type?: OMDbMovieType
	year?: number
}

export type OMDbQueryParams = ({ i: string } | { t: string }) & {
	apikey: string
	type?: OMDbMovieType
	y?: number
	plot?: 'short' | 'full'
	r?: 'xml' | 'json'
	callback?: string
	v?: number
}

export type ParseOMDbUrlFunction = (params: OMDbQueryParams) => string

export type FindMovieInOMDbByTitleFunction = <Input extends ExternalCallFunctionArgument>({
	title,
	type,
	year,
}: Input) => Promise<OMDbMovie> | OMDbMovie
