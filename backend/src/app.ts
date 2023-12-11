// app.ts
import express from 'express';
import workoutRoutes from './routes/workoutRoutes';

const app = express();
const port = 3001;

app.use('/api', workoutRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});