import axios from 'axios'
import { stringify } from 'query-string'
import {
	FindMovieInOMDbByTitleFunction,
	ParseOMDbUrlFunction,
} from '~/domain/omdb/omdb-service.interface'
import { OMDbMovie } from '~/domain/omdb/omdb-movie.type'
import { getEnvVariable } from '~/env'

/**
 * Parses query string for OMDb from an object.
 */
export const parseOMDbUrl: ParseOMDbUrlFunction = (params) =>
	`https://www.omdbapi.com/?${stringify(params)}`

/**
 * Sends a request to OMDb and returns fetched movie data.
 */
export const findMovieInOMDbByTitle: FindMovieInOMDbByTitleFunction = async ({
	title,
	type,
	year,
}) =>
	(
		await axios.post<OMDbMovie>(
			parseOMDbUrl({ apikey: getEnvVariable('OMDB_KEY'), t: title, type, y: year, plot: 'full' })
		)
	).data
