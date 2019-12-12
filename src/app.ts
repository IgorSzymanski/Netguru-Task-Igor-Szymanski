import * as express from 'express'
import * as bodyParser from 'body-parser'

import { MovieController } from '~/application/controllers/movie.controller'
import { CommentController } from '~/application/controllers/comment.controller'
import { getMongoConnection } from './data/connection'
import { useExpressServer } from 'routing-controllers'

export const createApp = async () => {
	await getMongoConnection()

	const app = express()
	app.use(bodyParser.json())

	useExpressServer(app, {
		controllers: [CommentController, MovieController],
		classToPlainTransformOptions: { excludePrefixes: ["_"] },
		cors: true,
	})
	return app
}
