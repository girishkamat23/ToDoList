import './App.css';
import React, { useContext } from 'react';
import ToDoList from './ToDoList';
import AppContext from './appContext';

function App() {
  const { taskArray, setTaskArray, text, setText } = useContext(AppContext);
  return (
    <section>
      <div className="app-title">
        <h2>To Do List</h2>
      </div>
      <ToDoList></ToDoList>
      {taskArray.map((item) => console.log(item.name))}
    </section>
  );
}

export default App;
