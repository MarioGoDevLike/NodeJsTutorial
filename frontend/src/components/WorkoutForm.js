import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      return;
    }
    if (response.ok) {
      console.log("new workout added!", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
    }
    return;
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add new workout</h3>
      <label>Exercise title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Exercise Load (in KG):</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Exercise Reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      {error && <div className="error">{error}</div>}
      <button>Submit</button>
    </form>
  );
};
