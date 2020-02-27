import React, {useState, useReducer} from 'react';
import {myState, myReducer} from './ListaReducer';


export default function Lista(){
    const [list, setList] = useReducer(myReducer, myState);

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