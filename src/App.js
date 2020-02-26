import React, {useState} from 'react';
import './App.css';

import {themes, ThemeContext} from './data/ThemeProvider';
import Teste from './ui/Teste';

function App() {
  const [val, setVal] = useState(themes.light);

  function toggle(){
    setVal(val === themes.light ? themes.dark : themes.light);
  }

  return (
    <ThemeContext.Provider value={{value: val, toggle}} >
      <div className="App">
         <button onClick={toggle} >{val}</button>
         <Teste />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
