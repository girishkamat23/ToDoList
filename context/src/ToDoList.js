import {
  Avatar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import React, { useContext, useState, useRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
import { v4 as uuidv4 } from 'uuid';
import { FlourescentTwoTone } from '@mui/icons-material';
import { convertDate } from './utils';
import AppContext from './appContext';

const ToDoList = () => {
  const { taskArray, setTaskArray, text, setText } = useContext(AppContext);
  const bodyRef = useRef(null);

  const onChangeListener = (e) => {
    let value = e.target.value;
    setText(value);
  };

  const onClickListener = () => {
    if (text) {
      let task = {
        id: uuidv4(),
        name: text,
        created: new Date().toISOString(),
      };
      let listArr = [...taskArray];
      listArr.push(task);
      setTaskArray(listArr);
      setText('');
    } else {
      alert('Cannot add empty task');
    }
  };

  const deleteTask = (id) => {
    let listArr = [...taskArray];
    let index = taskArray.findIndex((task) => task.id === id);
    listArr.splice(index, 1);
    setTaskArray(listArr);
    bodyRef.current.scrollIntoView();
  };

  return (
    <div className="list-container">
      <div className="todo-header" ref={bodyRef}>
        <TextField
          className="mui-textfield"
          id="outlined-basic"
          label="To Do Task"
          variant="outlined"
          size="small"
          value={text}
          onChange={(e) => onChangeListener(e)}
        />
        <Button variant="outlined" className="btn" onClick={onClickListener}>
          Add Task
        </Button>
      </div>
      <Divider />
      <div className="todo-body">
        <List dense={true}>
          {taskArray.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemAvatar>
                <Avatar>
                  <TaskIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={task?.name}
                secondary={convertDate(task?.created)}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ToDoList;
