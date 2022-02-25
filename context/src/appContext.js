import { createContext, useState } from 'react';

//kind of redux store
const AppContext = createContext(null);
export default AppContext;

//provider for context
export const AppContextProvider = ({ children }) => {
  const [taskArray, setTaskArray] = useState(null);

  /*     const [state, setState] = useState({
        textValue: "",
        counter: 0,
        students: [],
    }) */

  const [text, setText] = useState('');
  const [count, setCount] = useState('');

  return (
    <AppContext.Provider value={{ taskArray, setTaskArray, text, setText }}>
      {children}
    </AppContext.Provider>
  );
};
