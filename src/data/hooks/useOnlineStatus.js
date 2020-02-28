import {useState, useEffect} from 'react';

export default function useOnlineStatus(){
    const [isOnline, setOnline] = useState(navigator.onLine);

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    useEffect(() => {
        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);

        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
        }
    }, [])

    return isOnline;
}