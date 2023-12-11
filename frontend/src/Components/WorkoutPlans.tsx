// WorkoutPlan.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface WorkoutPlanData {
  id: string;
  title: string;
  exercises: Exercise[];
}

const WorkoutPlan: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlanData | null>(null);

  // Fetch your workout plan data based on the id
  useEffect(() => {
    // Mock API call or fetch data from your backend
    const fetchWorkoutPlan = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch(`/api/workout-plans/${id}`);
        const data = await response.json();
        setWorkoutPlan(data);
      } catch (error) {
        console.error('Error fetching workout plan:', error);
      }
    };

    fetchWorkoutPlan();
  }, [id]);

  if (!workoutPlan) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Workout Plan {workoutPlan.title}
      </Typography>
      {/* Render your workout plan details based on the fetched data */}
      <Box>
        {workoutPlan.exercises.map((exercise, index) => (
          <div key={index}>
            <Typography variant="body1" color="textPrimary">
              {exercise.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`${exercise.reps} reps / ${exercise.sets} sets`}
            </Typography>
          </div>
        ))}
      </Box>
      {/* Add the rest of your workout plan rendering logic */}
    </Container>
  );
};

export default WorkoutPlan;
