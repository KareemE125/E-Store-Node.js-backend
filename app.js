import express from 'express';
import cors from 'cors'

import { ConnectDB } from './DB/connection.js';
import * as Router from './src/app.routes.js'

const PORT = 5000;
const BASE_URL = '/api/v1'

const app = express();

ConnectDB();

 
app.use(cors())
app.use(express.json())

app.use(`${BASE_URL}/users`, Router.UsersRouter)
app.use(`${BASE_URL}/products`, Router.ProductsRouter)



app.listen(PORT, () => { console.log(`On PORT::${PORT}, Server is running.........`); })

