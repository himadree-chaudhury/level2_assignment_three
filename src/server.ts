import express from 'express';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
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