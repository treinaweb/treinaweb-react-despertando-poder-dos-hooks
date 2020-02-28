import {useState} from 'react';

function get(key, defaultValue){
    const value = window.localStorage.getItem(key) || defaultValue;
    try{
        return JSON.parse(value)
    }catch(error){
        return value;
    }
}

function set(key, value){
    if(typeof value !== 'string'){
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
}

export default function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(get(key, defaultValue));

    function updateValue(newValue){
        set(key, newValue);
        setValue(newValue);
    }

    return [value, updateValue];
}