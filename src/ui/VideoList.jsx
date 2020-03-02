import React from 'react';
import Video from './Video';

const _list = [
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

export default function VideoList(){

    function onClick(video){
        console.log(video);
    }

    return(
        <ul className="list" >
            {_list.map(item => (
                <Video key={item.id} onClick={onClick} video={item}  />
            ))}
        </ul>
    );
}

