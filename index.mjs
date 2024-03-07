import express from 'express';
import PostsRouter from './routes/PostRoutes.mjs'
import dbConntection from './db/index.mjs'
const app = express()
const port = 4000

app.use(express.json());
//эрор сработает при ошибке к подключению к бд
dbConntection.on('error', () => {
    console.log("dbConnect error!");
})

dbConntection.on('connected', () => {
    console.log("dbConnect");
})






app.get('/', (req, res) => {
    res.send('Hello World!')
});
//пи обращение к етой странице будет обраение к построутерс
// /posts будет добавляться к каждому пути , который мы определяем в роутах .

app.use('/posts', PostsRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})