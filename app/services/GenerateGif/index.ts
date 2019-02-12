const wget = require("node-wget")
import path from 'path';

const dest = path.join(__dirname, `../../../public/static/imgs/counter.gif`);

export function GenerateGif(time: string, name: string) {
  
  const url = `https://date-gif.herokuapp.com/generate\?time\=${time}\&name\=${name}`

  return new Promise((resolve, reject) => {
    wget({ dest, url }, (error: any, response: any, body: any) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    })
  })
}