import express from 'express';
import path from 'path';

import { indexController } from './controllers';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../../public')))
app.use('/', indexController);

app.listen(3030)