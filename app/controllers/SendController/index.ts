import { Router, Request, Response } from 'express';
import { FormatDate } from './../../utils/FormatDate'
import { GenerateGif } from './../../services/GenerateGif';

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {

  const { subject, email, date, timer, remaining } = request.query;

  const time = FormatDate(date, timer);

  GenerateGif(time, 'counter.gif').then((data) => {
    response.send({data})
  })

});

export const sendController: Router = router;
