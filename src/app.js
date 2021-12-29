import express from 'express';
const port = 3000;
import helmet from 'helmet';
import "./core/db.js";
import router from './routers/index.js';

const app = express();


app.use(express.json());
app.use(helmet());

app.use('/', router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

