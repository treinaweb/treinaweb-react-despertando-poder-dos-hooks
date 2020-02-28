import React from 'react';
import './App.css';
import useOnlineStatus from './data/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {isOnline ? 'Você está conectado' : 'Você desconectou'}
    </div>
  );
}

export default App;
