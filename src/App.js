import React from 'react';
import './App.css';

import VideoList from './ui/VideoList';
import NewVideoForm from './ui/NewVideoForm';
import VideoPlayer from './ui/VideoPlayer';
import {VideoContext} from './data/video/VideoContext';

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
