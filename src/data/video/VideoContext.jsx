import React, {createContext} from 'react';

const _state = {
    selectedVideo: {
        id: 2,
        title: 'Disco',
        duration: 10,
        url: 'https://www.videvo.net/videvo_files/converted/2016_10/preview/161021_04_CoffeeShop_RecordPlayer_1080p.mp414266.webm',
        cover: 'https://images.freeimages.com/images/large-previews/3c5/blue-discs-2-1469920.jpg'
    },
    videos: [
        {
            id: 2,
            title: 'Disco',
            duration: 10,
            url: 'https://www.videvo.net/videvo_files/converted/2016_10/preview/161021_04_CoffeeShop_RecordPlayer_1080p.mp414266.webm',
            cover: 'https://images.freeimages.com/images/large-previews/3c5/blue-discs-2-1469920.jpg'
        },
        {
            id: 5,
            title: 'Disco',
            duration: 10,
            url: 'https://www.videvo.net/videvo_files/converted/2016_10/preview/161021_04_CoffeeShop_RecordPlayer_1080p.mp414266.webm',
            cover: 'https://images.freeimages.com/images/large-previews/3c5/blue-discs-2-1469920.jpg'
        },
        {
            id: 8,
            title: 'Disco',
            duration: 10,
            url: 'https://www.videvo.net/videvo_files/converted/2016_10/preview/161021_04_CoffeeShop_RecordPlayer_1080p.mp414266.webm',
            cover: 'https://images.freeimages.com/images/large-previews/3c5/blue-discs-2-1469920.jpg'
        }
    ]
};

export const videoStore = createContext(_state);
const {Provider} =  videoStore;

export function VideoContext(props){
    return (
        <Provider value={[_state]} >{props.children}</Provider>
    )
}