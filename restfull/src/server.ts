import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8081;

app.get('/', (req: Request, res: Response)=>{
    res.send('THIS IS TEST RESPONSE FRON THE SERVER')
});


app.listen(port, ()=>{
    console.log('Server listen in port :', port);
})