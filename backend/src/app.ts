//Config my server
import express, { urlencoded } from "express";
import cors from 'cors'
import morgan from "morgan";
import config from "./config/config";
import userRoutes from '../src/routes/user.routes'

const app = express()

app.set('port',config.PORT);

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(userRoutes)

export default app;