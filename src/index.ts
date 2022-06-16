import express, { Application } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
config()

const PORT: number = +(process.env.PORT || 4000)

const app: Application = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('🔥 Server has been started on port:', PORT);
    
})