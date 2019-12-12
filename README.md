# NetGuru Recrutation Task

```
We’d like you to build simple REST API for us - a basic movie database interacting with external API. Here’s full specification of endpoints that we’d like it to have:

POST /movies:
Based on passed data, other movie details should be fetched from http://www.omdbapi.com/ (or other similar, public movie database) - and saved to application database.
GET /movies:
Should fetch list of all movies already present in application database.
POST /comments:
Comment should be saved to application database
GET /comments:
Should fetch list of all comments present in application database.


Rules & hints:

Please consider those requirements as basic. We value a good code structure or additional functionalities.
During implementing the assignment use many different and appropriate layers (i.e. middleware), design patterns (i.e. serializers), and so on.
Don’t forget to test appropriate amount of code.
Usage of latest ECMAScript/TypeScript standard and features is encouraged.
The application's code should be kept in a public repository so that we can read it, pull it and build it ourselves. Remember to include README file or at least basic notes on application requirements and setup - we should be able to easily and quickly get it running.
Please dockerize your application.
Written application must be hosted and publicly available for us online - we recommend Heroku.
```

---

# Usage

Create an `.env` file. You can copy the preexisting `.env.dist` file and rename it.

```bash
cp .env.dist .env
```

Set 4 environemntal variable:

```
PORT=3000
NODE_ENV=development
MONGO_URL=mongodb://.... //FULL URL
OMDB_KEY=XXXXXXX
```

## To run in Docker (mongodb container will also be created. Keep it in mind, when setting ENV variables.), run the command:

```bash
docker-compose up
```

## To run locally:

```bash
yarn
yarn build
yarn start:prod
```

## The app is deployed under the URL:

```
https://netguru-task-igor-szymanski.herokuapp.com
```

# Endpoints

## /movies

> https://netguru-task-igor-szymanski.herokuapp.com/movies

`GET` returns all the movies present in the database
`POST` saves a movie into the database with remaining data fecthed from an external API

The structure of `POST` body:

```ts
 type MoviePOST {
	title!: string
	year?: number
	rated?: string
	released?: string
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
	ratings?: Array<{
                value!: string
                source!: string
            }>
	metascore?: number
	imdbRating?: number
	imdbVotes?: string
	type?: 'movie' | 'series' | 'episode'
	dvd?: string
	boxOffice?: string
	production?: string
	website?: string
	response?: string
}
```

## /comments

> https://netguru-task-igor-szymanski.herokuapp.com/comments

`GET` returns all the comments present in the database
`POST` saves a comment on a movie into the database

The stucture of `POST` body:

```ts
type CommentPOST {
	username!: string
	email!: string
	body!: string
	movieId!: string
}
```
