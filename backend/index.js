import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res)=>{
    res.send('hello to moments123')
})

// const CONNECTION_URL = "mongodb+srv://luke:yu19940719@cluster0.catds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`)))
    .catch((error) => console.log(error));