import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty } from "class-validator"

export class AddCommentDTO {
	@IsString()
	@MinLength(8)
    @MaxLength(20)
	username!: string

	@IsEmail()
	@IsNotEmpty()
	email!: string

	@IsString()
	@IsNotEmpty()
	body!: string

	@IsString()
	@IsNotEmpty()
	movieId!: string
}
