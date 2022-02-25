import logo from './logo.svg';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />



function App() {
  return (
    <div className='app'>
    <div className="app-bar">
      <div className='button-div'>
        <MenuIcon />
      </div>
      <div className='title-div'>
      <div>
      <span>My shopping list</span>
      </div>
      <div><Avatar/></div>
      </div>
    </div>
    </div>
  );
}

export default App;
