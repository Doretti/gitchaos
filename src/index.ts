import express, { Application } from 'express'
import { config } from 'dotenv'
config()

const PORT: number = +(process.env.PORT || 4000)

const app: Application = express()

app.listen(PORT, () => {
    console.log('🔥 Server has been started on port:', PORT);
    
})