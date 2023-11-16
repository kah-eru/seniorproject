import React from "react";
import Workout from "./Desktop-Components/Desktop-cards";
import NavBar from "./Desktop-Components/Desktop-navbar";
import "./Desktop.css";

const Desktop: React.FC = () => {
  const workoutData = [
    { id: 1, title: 'Workout 1', description:'This is workout 1 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 2, title: 'Workout 2', description:'This is workout 2 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 3, title: 'Workout 3', description:'This is workout 3 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 4, title: 'Workout 4', description:'This is workout 4 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 5, title: 'Workout 5', description:'This is workout 5 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 6, title: 'Workout 6', description:'This is workout 6 consisting of Workouts', image: './images/Workout1.jpg' },
    // Add more workout data as needed
  ];

  return (

    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flexWrap: 'wrap' }}>
        {workoutData.map((workout) => (
          <Workout key={workout.id} {...workout} />
        ))}
      </div>

    </div>
  )

};

export default Desktop;
