'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [deadline, setDeadline] = useState('');

  function addTask() {
    if (!title || !duration || !deadline) return;
    const newTask = {
      title,
      duration: parseInt(duration),
      deadline: new Date(deadline),
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDuration('');
    setDeadline('');
  }

  return (
    <main style={{ padding: '2rem', background: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠 The Growth Project Tracker</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <button onClick={addTask} style={{ padding: '0.5rem 1rem', background: '#444', color: '#fff' }}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            ✅ {task.title} – {task.duration} mins – due {task.deadline.toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
