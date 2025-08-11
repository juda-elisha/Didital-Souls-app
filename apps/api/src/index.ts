import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chat';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chat", chatRouter);

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});