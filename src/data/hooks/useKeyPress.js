import {useState, useEffect} from 'react';

export default function useKeyPress(targetKey){
    const [isPressed, setPressed] = useState(false);

    function up({key}){
        if(key === targetKey){
            setPressed(false);
        }
    }

    function down({key}){
        if(key === targetKey){
            setPressed(true);
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', up);
        window.addEventListener('keydown', down);
        return () => {
            window.removeEventListener('keyup', up);
            window.removeEventListener('keydown', down);
        }
    }, []);

    return isPressed;
}