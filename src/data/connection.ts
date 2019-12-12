import * as mongoose from 'mongoose'
import { getEnvVariable } from '~/env'

export const getMongoConnection = () =>
	mongoose.connect(getEnvVariable('MONGO_URL'), {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
