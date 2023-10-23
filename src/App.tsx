import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [reps, setReps] = useState<number | ''>('');
  const [nextWeight, setNextWeight] = useState<number | null>(null);
  const [liftedWeight, setLiftedWeight] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof liftedWeight === 'number') {
      if (Number(reps) >= 0 && Number(reps) <= 4) {
        setNextWeight(liftedWeight); // Same weight
      } else if (Number(reps) >= 5 && Number(reps) <= 8) {
        setNextWeight(liftedWeight + 2.5); // Increase by 2.5lb
      } else if (Number(reps) > 8) {
        setNextWeight(liftedWeight + 5); // Increase by 5lb
      }
    }
  };
  

  return (
    <div className="App">
      <h1>Bench Press Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Weight Lifted (lb)"
          value={liftedWeight}
          onChange={(e) => setLiftedWeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Weight (lb)"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Reps Completed"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
        <button type="submit">Calculate</button>
      </form>
      {nextWeight && <p>Next set weight: {nextWeight} lb</p>}
    </div>
  );
}

export default App;
