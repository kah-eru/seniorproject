// workoutModel.ts
export interface Workout {
    id: number;
    name: string;
    reps: number;
    sets: number;
  }
  
 
  
  // workoutRoutes.ts
  import { Router } from 'express';
  import { getAllWorkouts, getWorkoutById } from '../controllers/workoutController';
  
  const router = Router();
  
  router.get('/workouts', (_, res) => {
    const allWorkouts = getAllWorkouts();
    res.json(allWorkouts);
  });
  
  router.get('/workouts/:id', (req, res) => {
    const { id } = req.params;
    const workoutId = parseInt(id, 10);
    const workout = getWorkoutById(workoutId);
  
    if (workout) {
      res.json(workout);
    } else {
      res.status(404).json({ error: 'Workout not found' });
    }
  });
  
  export default router;
  
  // app.ts
  import express from 'express';
  import workoutRoutes from '../routes/workoutRoutes';
  
  const app = express();
  const port = 3001;
  
  app.use('/api', workoutRoutes);
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  