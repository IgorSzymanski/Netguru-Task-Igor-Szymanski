import { AddMovieDTO } from './movie.dto'
import { Movie } from './movie.type'
import { IRepository } from '../repository.interface'

export type addMovie = (input: AddMovieDTO) => Movie | Promise<Movie>
export type listMovies = () => Movie[] | Promise<Movie[]>

export interface IMovieRepository extends IRepository<Movie, AddMovieDTO> {
    findById: (id: string) => Promise<Movie> | Movie
}
