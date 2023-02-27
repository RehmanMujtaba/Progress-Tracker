import { useState } from "react";

const ProgressTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [progressValues, setProgressValues] = useState([]);

  const handleAddGoal = () => {
    if (newGoal) {
      setGoals([...goals, newGoal]);
      setProgressValues([...progressValues, 0]);
      setNewGoal("");
    }
  };

  const handleDeleteGoal = (index) => {
    setGoals(goals.filter((goal, i) => i !== index));
    setProgressValues(progressValues.filter((value, i) => i !== index));
  };

  const handleProgressChange = (index, value) => {
    const updatedValues = [...progressValues];
    updatedValues[index] = value;
    setProgressValues(updatedValues);
  };

  return (
    <div className="ProgressTrackerWithGoals">

      <div>
        <h1>Progress Tracker</h1>
        <div>
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button onClick={handleAddGoal}>Add Goal</button>
        </div>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              <span>{goal}</span>
              <input
                type="number"
                value={progressValues[index]}
                onChange={(e) =>
                  handleProgressChange(index, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleDeleteGoal(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
