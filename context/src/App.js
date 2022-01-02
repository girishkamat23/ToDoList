import './App.css';
import React from 'react';
import ToDoList from './ToDoList';

function App() {
  return (
    <section>
      <div className="app-title">
        <h2>To Do List</h2>
      </div>
      <ToDoList></ToDoList>
    </section>
  );
}

export default App;
