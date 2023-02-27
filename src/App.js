import React, { useState } from 'react';

function ProgressTrackerWithGoals() {
  const [progress, setProgress] = useState(0);
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  
  const handleIncrease = () => {
    setProgress(progress + 10);
  };
  
  const handleDecrease = () => {
    setProgress(progress - 10);
  };
  
  const handleAddGoal = () => {
    setGoals([...goals, newGoal]);
    setNewGoal('');
  };
  
  return (
    <div className="ProgressTrackerWithGoals">
      <h1>Progress Tracker</h1>
      <p>Current Progress: {progress}%</p>
      <button onClick={handleIncrease}>Increase Progress</button>
      <button onClick={handleDecrease}>Decrease Progress</button>
      <hr />
      <h2>Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="Enter a new goal" 
        value={newGoal} 
        onChange={(e) => setNewGoal(e.target.value)} 
      />
      <button onClick={handleAddGoal}>Add Goal</button>
    </div>
  );
}

export default ProgressTrackerWithGoals;
