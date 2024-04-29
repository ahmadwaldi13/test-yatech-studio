import { config } from 'dotenv'

config()

export const { PORT, DB_HOST, DB_PORT, DB_NAME, SECRET_KEY} = process.env