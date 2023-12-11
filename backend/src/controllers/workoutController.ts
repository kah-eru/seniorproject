 // workoutController.ts
 import { Workout } from '../model/workoutModel';
  
 const workouts: Workout[] = [
   { id: 1, name: 'Exercise A', reps: 10, sets: 3 },
   { id: 2, name: 'Exercise B', reps: 12, sets: 4 },
   // ... other workout data
 ];
 
 export const getAllWorkouts = (): Workout[] => workouts;
 
 export const getWorkoutById = (id: number): Workout | undefined =>
   workouts.find((workout) => workout.id === id);