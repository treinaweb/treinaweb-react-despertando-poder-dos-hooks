import React from 'react';
import './App.css';

import VideoList from './ui/VideoList';
import NewVideoForm from './ui/NewVideoForm';
import VideoPlayer from './ui/VideoPlayer';

function App() {
  return (
    <div className="App">
      <NewVideoForm />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}

export default App;
