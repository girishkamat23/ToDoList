import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <p>To Do Tasks</p>
      <div className="input-field">
        <TextField id="filled-basic" label="Task Details" variant="filled" />
        <Button variant="contained">Add Task</Button>
      </div>
    </div>
  );
}

export default App;
