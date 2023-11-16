import React, { useState } from "react";
import Workout from "./Desktop-Components/Desktop-cards";
import NavBar from "./Desktop-Components/Desktop-navbar";
import WorkoutPlan from "./Desktop-Components/Desktop-workoutplans";
import "./Desktop.css";

const Desktop: React.FC = () => {
  const [showWorkoutPlan, setShowWorkoutPlan] = useState(false);

  const workoutData = [
    { id: 1, title: 'Workout 1', description: 'This is workout 1 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    { id: 2, title: 'Workout 2', description: 'This is workout 2 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    { id: 3, title: 'Workout 3', description: 'This is workout 3 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    { id: 4, title: 'Workout 4', description: 'This is workout 4 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    { id: 5, title: 'Workout 5', description: 'This is workout 5 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    { id: 6, title: 'Workout 6', description: 'This is workout 6 consisting of Workouts', image: './images/Workout1.jpg', onClickPlan: () => setShowWorkoutPlan(true) },
    // Add more workout data as needed
  ];

  const workoutPlanData = {
    workoutImage: '/path/to/workout-image.jpg', // Replace with the actual path
    workouts: [
      { name: 'Workout 1', reps: 10, sets: 3 },
      { name: 'Workout 2', reps: 12, sets: 4 },
      { name: 'Workout 3', reps: 8, sets: 4 },
      // Add more workout data as needed
    ],
    startButtonColor: 'primary', // Change the color as needed
  };

  const navigateBackToDesktop = () => {
    setShowWorkoutPlan(false);
  };

  return (
    <div>
      <NavBar onNavigateBack={navigateBackToDesktop} />
      {showWorkoutPlan ? (
        <WorkoutPlan {...workoutPlanData} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flexWrap: 'wrap' }}>
          {workoutData.map((workout) => (
            <Workout key={workout.id} {...workout} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Desktop;
