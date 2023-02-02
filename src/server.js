import express from 'express';
import route from './routes/index.js';
const app = express();
app.use(express.json());

app.use('/api', route.userRoute);

export default app;