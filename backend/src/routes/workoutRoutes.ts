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
