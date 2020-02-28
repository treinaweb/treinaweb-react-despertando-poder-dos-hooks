import React from 'react';
import './App.css';
import useWindowSize from './data/hooks/useWindowSize';

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      Largura: {windowSize.width}
      <br />
      Altura: {windowSize.height}
    </div>
  );
}

export default App;
