// WorkoutDetails.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

interface WorkoutDetailsProps {
  workoutName: string;
  nextWorkoutHandler: () => void;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workoutName, nextWorkoutHandler }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Workout Details
      </Typography>

      <Typography variant="h5" color="white" paragraph>
        Details for {workoutName}
      </Typography>

      {/* Include additional details or content for the workout as needed */}

    </Container>
  );
};

export default WorkoutDetails;
