// WorkoutPlan.tsx
import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import WorkoutDetails from './WorkoutDetails'; // Import the WorkoutDetails component

interface Workout {
    name: string;
    reps: number;
    sets: number;
}

interface WorkoutPlanProps {
    workoutImage: string;
    workouts: Workout[];
    startButtonColor: string;
}

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ workoutImage, workouts, startButtonColor }) => {
    const navigate = useNavigate(); // Get the history object from React Router
    const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

    const handleStartWorkout = (workoutName: string) => {
        setSelectedWorkout(workoutName);
        navigate('/workout-details'); // Navigate to the WorkoutDetails component
    };

    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
            <img src={workoutImage} alt="Workout Preview" style={{ width: '100%', backgroundColor: 'white' }} />
            {workouts.map((workout, index) => (
                <div key={workout.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <Typography variant="body1" color="white">
                        {workout.name}
                    </Typography>
                    <Typography variant="body1" color="white">
                        {`${workout.reps} reps / ${workout.sets} sets`}
                    </Typography>
                    <Button variant="contained" size="large" style={{ backgroundColor: startButtonColor }} onClick={() => handleStartWorkout(workout.name)}>

                        Start Workout
                    </Button>
                </div>
            ))}

            {/* Render the WorkoutDetails component when selectedWorkout is not null */}
            {selectedWorkout && <WorkoutDetails workoutName={selectedWorkout} />}
        </Container>
    );
};

export default WorkoutPlan;
