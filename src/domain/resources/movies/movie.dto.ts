import { MovieType } from './movie.type'
import { IsString, IsInt, IsNotEmpty, IsDate, IsNumber, IsIn, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class AddMovieDTO {
	@IsString()
	@IsNotEmpty()
	title!: string

	@IsInt()
	@IsOptional()
	year?: number

	@IsString()
	@IsOptional()
	rated?: string

	@IsDate()
	@IsOptional()
	@Type(() => Date)
	released?: Date

	@IsString()
	@IsOptional()
	runtime?: string

	@IsString()
	@IsOptional()
	genre?: string

	@IsString()
	@IsOptional()
	director?: string

	@IsString()
	@IsOptional()
	writer?: string

	@IsString()
	@IsOptional()
	actors?: string

	@IsString()
	@IsOptional()
	plot?: string

	@IsString()
	@IsOptional()
	language?: string

	@IsString()
	@IsOptional()
	country?: string

	@IsString()
	@IsOptional()
	awards?: string

	@IsString()
	@IsOptional()
	poster?: string

	@ValidateNested({ each: true })
	@IsOptional()
	ratings?: AddMovieRatingDTO[]

	@IsNumber()
	@IsOptional()
	metascore?: number

	@IsNumber()
	@IsOptional()
	imdbRating?: number

	@IsString()
	@IsOptional()
	imdbVotes?: string

	@IsString()
	@IsIn(['movie', 'series', 'episode'])
	@IsOptional()
	type?: MovieType
	
	@IsDate()
	@IsOptional()
	@Type(() => Date)
	dvd?: Date

	@IsString()
	@IsOptional()
	boxOffice?: string

	@IsString()
	@IsOptional()
	production?: string

	@IsString()
	@IsOptional()
	website?: string

	@IsString()
	@IsOptional()
	response?: string
}

export class AddMovieRatingDTO {
	@IsNotEmpty()
	@IsString()
	value!: string

	@IsNotEmpty()
	@IsString()
	source!: string
}
