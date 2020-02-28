import React, {useState, useEffect} from 'react';
import './App.css';
import useDebounce from './data/hooks/useDebounce';

function App() {
  const [text, setText] = useState('');
  const myText = useDebounce(text, 1000);

  useEffect(() => {
    console.log(text);
  }, [myText])

  return (
    <div>
      <input onChange={event => setText(event.target.value)} type="text" />
      <br/>
      <div>{myText}</div>
    </div>
  );
}

export default App;
