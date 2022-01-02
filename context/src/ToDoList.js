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
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
  const [text, setText] = useState('');
  const [listArray, setListArray] = useState([]);

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
      let listArr = [...listArray];
      listArr.push(task);
      setListArray(listArr);
      setText('');
    } else {
      alert('Cannot add empty task');
    }
  };

  const deleteTask = (id) => {
    let listArr = [...listArray];
    let index = listArray.findIndex((task) => task.id === id);
    listArr.splice(index, 1);
    setListArray(listArr);
  };

  return (
    <div className="list-container">
      <div className="todo-header">
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
          {listArray && listArray.length ? (
            listArray.map((task, index) => (
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
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={task?.name} secondary={task?.created} />
              </ListItem>
            ))
          ) : (
            <h2>No tasks added.</h2>
          )}
        </List>
      </div>
    </div>
  );
};

export default ToDoList;
