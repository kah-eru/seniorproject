import { Button, Container, Typography } from '@mui/material';
import React from 'react';

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
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
            <img src={workoutImage} alt="Workout" style={{ width: '100%', backgroundColor: "white"}} />
            {workouts.map((workout, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>

                    <Typography variant="body1" color="white">
                        {workout.name}
                    </Typography>
                    <Typography variant="body1" color="white">
                        {`${workout.reps} reps / ${workout.sets} sets`}
                    </Typography>

                </div>
            ))}
            
            <Button variant="contained" size="large" color='primary'>
                Start Workout
            </Button>
        </Container>
    );
};

export default WorkoutPlan;
