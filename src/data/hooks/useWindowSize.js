import {useState, useEffect, useDebugValue} from 'react';

function getWindowSize(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export default function useWindowSize(){
    const [size, setSize] = useState(getWindowSize());

    function updateSize(){
        setSize(getWindowSize())
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [])

    useDebugValue(size.height < 120 ? 'Janela Pequena':'Janela Grande', (text)=>{
        return text.toUpperCase();
    });

    return size;
}