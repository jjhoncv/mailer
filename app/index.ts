import express from 'express';
import path from 'path';

import { indexController, sendController } from './controllers';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../public')))
app.use('/', indexController);
app.use('/send', sendController);

app.listen(3000)