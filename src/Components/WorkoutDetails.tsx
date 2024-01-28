// WorkoutDetails.tsx
<<<<<<< HEAD
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

interface WorkoutDetailsProps {
  workoutName: string;
  nextWorkoutHandler: () => void;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workoutName, nextWorkoutHandler }) => {
=======
import { Button, Container, Typography } from '@mui/material';
import React from 'react';

interface WorkoutDetailsProps {
  workoutName: string;
  onBackToWorkouts?: () => void; // Make onBackToWorkouts optional
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workoutName, onBackToWorkouts }) => {
>>>>>>> 21d7be62d554915787485641c4ea1187492767dd
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Workout Details
      </Typography>

      <Typography variant="h5" color="white" paragraph>
        Details for {workoutName}
      </Typography>

      {/* Include additional details or content for the workout as needed */}

<<<<<<< HEAD
=======
      <Button variant="contained" size="large" color="primary" onClick={onBackToWorkouts}>
        Back to Workouts
      </Button>
>>>>>>> 21d7be62d554915787485641c4ea1187492767dd
    </Container>
  );
};

export default WorkoutDetails;
