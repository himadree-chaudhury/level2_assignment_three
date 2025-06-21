import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.use(express.json());
app.use(cors())

app.get('/api', (req , res) => {
    res.send('Welcome to the library management app!');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})

async function server() {
try {
    await mongoose.connect(config.dbUrl as string);
    console.log("Connected to Database");
} catch (error) {
    console.log(error);
}
}
server();