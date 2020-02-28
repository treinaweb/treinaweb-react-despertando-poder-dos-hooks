import React, {useEffect} from 'react';
import './App.css';
import useKeyPress from './data/hooks/useKeyPress';

function App() {
  const keyA = useKeyPress('a');
  const keyB = useKeyPress('b');

  useEffect(() => {
    if(keyA){
      // alguma coisa
    }
  }, [keyA])


  return (
    <div>
      {keyA && 'A'}
      {keyB && 'B'}
    </div>
  );
}

export default App;
