import React, {useState, useReducer} from 'react';
//import {myState, myReducer} from './ListaReducer';
import useMeuHook from '../data/hooks/useMeuHook';


export default function Lista(){
    const [list, setList] = useMeuHook([]);

    function add(){
        setList({type: 'add'});
    }

    function remove(id){
        setList({type: 'remove', value: id});
    }

    function update(newItem){
        setList({type: 'update', value: newItem});
    }
    
    return(
        <>
            <button onClick={add} >Add</button>
            <ul>
                {list.map(item => (
                    <li onClick={() => remove(item.id)} key={item.id} >{item.id}</li>
                ))}
            </ul>
        </>
    )
}