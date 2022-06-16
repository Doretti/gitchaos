import express, { Application } from 'express'
import { config } from 'dotenv'
config()
import cors from 'cors'
import bodyParser from 'body-parser'
import database from './database'

const PORT: number = +(process.env.PORT || 4000)

const app: Application = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    try {
        database.authenticate().then(() => {
            console.log('🔥 Server has been connected to database');
        })
        database.sync({ force: true })
        console.log('🔥 Server has been started on port:', PORT);
    } catch (error) {
        console.error('❗ Server start error:', error);        
    }
    
})