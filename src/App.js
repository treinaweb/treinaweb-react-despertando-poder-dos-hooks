import React, {useRef, useEffect} from 'react';
import './App.css';
import useOnScreen from './data/hooks/useOnScreen';

function App() {
  const element = useRef();
  const isVisible = useOnScreen(element);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible])

  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div ref={element} >TreinaWeb</div>
    </div>
  );
}

export default App;
