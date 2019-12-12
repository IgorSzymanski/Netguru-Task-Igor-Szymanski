import 'reflect-metadata'

import { createApp } from './app'
import { getEnvVariable } from './env'

const port = Number(getEnvVariable('PORT'))

createApp().then((app) =>
	app.listen(port, () => console.log(`Example app listening on port ${port}!`))
)
