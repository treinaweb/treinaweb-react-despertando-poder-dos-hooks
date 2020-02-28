import {useState, useEffect} from 'react';

export default function useOnScreen(ref, rootMargin = '0px'){
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        },{
            rootMargin
        });
        if(element){
            observer.observe(element);
        }
        return () => {
            observer.unobserve(element);
        }
    }, [ref, rootMargin])

    return isVisible;
}