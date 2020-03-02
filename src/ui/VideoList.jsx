import React, {useContext} from 'react';
import Video from './Video';
import {videoStore} from '../data/video/VideoContext';

export default function VideoList(){
    const [videoState] = useContext(videoStore);

    function onClick(video){
        console.log(video);
    }

    return(
        <ul className="list" >
            {videoState.videos.map(item => (
                <Video key={item.id} onClick={onClick} video={item}  />
            ))}
        </ul>
    );
}

