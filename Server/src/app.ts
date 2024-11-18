
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
import projectRouter from './router/project.router';
import userRouter from './router/user.router'
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',userRouter);
app.use('/',projectRouter);

app.listen(3000,()=> console.log(`Server is listening on Port 3000`));