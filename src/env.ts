import * as dotenv from 'dotenv'

dotenv.config()

export type EnvVar = 'PORT' | 'NODE_ENV' | 'MONGO_URL' | 'OMDB_KEY'
  
export const getEnvVariable = (variable: EnvVar) => process.env[variable] ?? (() => { throw new Error(`Enironemntal variable [${variable}] is not defined!`) })()
